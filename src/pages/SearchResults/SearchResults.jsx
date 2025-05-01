import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './SearchResults.css';

const SearchResults = () => {
  const navigate = useNavigate();
  const { 
    medicalCenters,
    selectedState,
    selectedCity,
    loading,
    searchMedicalCenters
  } = useAppContext();

  useEffect(() => {
    // If no state or city is selected, redirect to home
    if (!selectedState || !selectedCity) {
      navigate('/');
      return;
    }

    // If no medical centers in state, fetch them
    if (medicalCenters.length === 0) {
      searchMedicalCenters();
    }
  }, [selectedState, selectedCity, medicalCenters.length, navigate, searchMedicalCenters]);

  const handleBookAppointment = (centerId) => {
    navigate(`/booking/${centerId}`);
  };

  // Function to render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    const maxRating = 5;
    
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} size={16} fill="#FFC107" color="#FFC107" />);
      } else {
        stars.push(<Star key={i} size={16} color="#CBD5E1" />);
      }
    }
    
    return <div className="star-rating">{stars}</div>;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading medical centers...</p>
      </div>
    );
  }

  return (
    <div className="search-results-page">
      <div className="container">
        <div className="results-header">
          <h1>{medicalCenters.length} medical centers available in {selectedCity}</h1>
          <p>Showing results for {selectedCity}, {selectedState}</p>
        </div>
        
        <div className="results-list">
          {medicalCenters.length > 0 ? (
            medicalCenters.map((center) => (
              <div className="center-card" key={center['Provider ID']}>
                <div className="center-info">
                  <h3>{center['Hospital Name']}</h3>
                  <div className="center-details">
                    <div className="center-location">
                      <MapPin size={16} />
                      <span>{`${center['Address']}, ${center['City']}, ${center['State']} ${center['ZIP Code']}`}</span>
                    </div>
                    <div className="center-rating">
                      {renderStarRating(center['Hospital overall rating'] || 0)}
                      <span>({center['Hospital overall rating'] || 'N/A'} out of 5)</span>
                    </div>
                    <div className="center-services">
                      <div className="service-tag">
                        {center['Hospital Type'] || 'General Hospital'}
                      </div>
                      {center['Emergency Services'] === 'Yes' && (
                        <div className="service-tag emergency">
                          Emergency Services
                        </div>
                      )}
                    </div>
                    <div className="center-comparison">
                      <span className="comparison-item">
                        <strong>Patient Experience:</strong> {center['Patient experience national comparison'] || 'N/A'}
                      </span>
                      <span className="comparison-item">
                        <strong>Safety of Care:</strong> {center['Safety of care national comparison'] || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="center-actions">
                  <button 
                    className="book-button"
                    onClick={() => handleBookAppointment(center['Provider ID'])}
                  >
                    <Calendar size={16} />
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No medical centers found in {selectedCity}, {selectedState}.</p>
              <button 
                className="back-button"
                onClick={() => navigate('/')}
              >
                Back to Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;


