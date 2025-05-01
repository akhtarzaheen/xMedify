import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar, Clock, ArrowLeft, Check } from 'lucide-react';
import { format, addDays, isBefore, startOfToday } from 'date-fns';
import { useAppContext } from '../../context/AppContext';
import './BookingPage.css';

const BookingPage = () => {
  const { centerId } = useParams();
  const navigate = useNavigate();
  
  const { 
    medicalCenters, 
    selectedState, 
    selectedCity, 
    searchMedicalCenters, 
    addBooking 
  } = useAppContext();
  
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  // Generate dates for the next 7 days
  const today = startOfToday();
  const nextWeekDates = Array.from({ length: 7 }, (_, i) => addDays(today, i));
  
  // Time slots for morning, afternoon, and evening
  const timeSlots = {
    morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
    afternoon: ['01:00 PM', '02:00 PM', '03:00 PM'],
    evening: ['05:00 PM', '06:00 PM', '07:00 PM']
  };
  
  useEffect(() => {
    const loadCenter = async () => {
      setLoading(true);
      
      // If no medical centers in context, try to fetch them
      if (medicalCenters.length === 0 && selectedState && selectedCity) {
        await searchMedicalCenters();
      }
      
      // Find the selected center from the list
      const center = medicalCenters.find(center => center['Provider ID'] === centerId);
      
      if (center) {
        setSelectedCenter(center);
      } else {
        // If center not found, redirect to search page
        navigate('/search');
      }
      
      setLoading(false);
    };
    
    loadCenter();
  }, [centerId, medicalCenters, searchMedicalCenters, navigate, selectedState, selectedCity]);
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };
  
  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  
  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTimeSlot || !selectedCenter) return;
    
    const booking = {
      id: Date.now().toString(),
      centerId: selectedCenter['Provider ID'],
      centerName: selectedCenter['Hospital Name'],
      centerAddress: `${selectedCenter['Address']}, ${selectedCenter['City']}, ${selectedCenter['State']} ${selectedCenter['ZIP Code']}`,
      date: format(selectedDate, 'yyyy-MM-dd'),
      formattedDate: format(selectedDate, 'EEEE, MMMM d, yyyy'),
      timeSlot: selectedTimeSlot,
      createdAt: new Date().toISOString()
    };
    
    addBooking(booking);
    setBookingSuccess(true);
    
    // Navigate to my bookings page after a delay
    setTimeout(() => {
      navigate('/my-bookings');
    }, 2000);
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
        <p>Loading booking information...</p>
      </div>
    );
  }
  
  if (bookingSuccess) {
    return (
      <div className="booking-success">
        <div className="success-icon">
          <Check size={48} color="white" />
        </div>
        <h2>Booking Successful!</h2>
        <p>Your appointment has been booked successfully.</p>
        <p>Redirecting to My Bookings page...</p>
      </div>
    );
  }
  
  return (
    <div className="booking-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/search')}>
          <ArrowLeft size={16} />
          <span>Back to Search Results</span>
        </button>
        
        {selectedCenter && (
          <div className="booking-container">
            <div className="center-details">
              <h2>Book an Appointment</h2>
              <div className="center-card">
                <h3>{selectedCenter['Hospital Name']}</h3>
                <div className="center-info">
                  <div className="center-location">
                    <MapPin size={16} />
                    <span>{`${selectedCenter['Address']}, ${selectedCenter['City']}, ${selectedCenter['State']} ${selectedCenter['ZIP Code']}`}</span>
                  </div>
                  <div className="center-rating">
                    {renderStarRating(selectedCenter['Hospital overall rating'] || 0)}
                    <span>({selectedCenter['Hospital overall rating'] || 'N/A'} out of 5)</span>
                  </div>
                  <div className="center-services">
                    <div className="service-tag">
                      {selectedCenter['Hospital Type'] || 'General Hospital'}
                    </div>
                    {selectedCenter['Emergency Services'] === 'Yes' && (
                      <div className="service-tag emergency">
                        Emergency Services
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="booking-form">
              <div className="booking-dates">
                <h3>Select Date</h3>
                <div className="dates-grid">
                  {nextWeekDates.map((date, index) => (
                    <div
                      key={index}
                      className={`date-card ${isBefore(date, today) ? 'disabled' : ''} ${
                        selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'selected' : ''
                      }`}
                      onClick={() => handleDateClick(date)}
                    >
                      <p className="day">{format(date, 'EEE')}</p>
                      <p className="date">{format(date, 'd')}</p>
                      <p className="month">{format(date, 'MMM')}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedDate && (
                <div className="booking-times">
                  <h3>Select Time</h3>
                  
                  <div className="time-slot-section">
                    <p>Today</p>
                    <div className="time-slots">
                      {timeSlots.morning.map((time, index) => (
                        <button
                          key={`morning-${index}`}
                          className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSlotClick(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="time-slot-section">
                    <p>Morning</p>
                    <div className="time-slots">
                      {timeSlots.morning.map((time, index) => (
                        <button
                          key={`morning-${index}`}
                          className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSlotClick(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="time-slot-section">
                    <p>Afternoon</p>
                    <div className="time-slots">
                      {timeSlots.afternoon.map((time, index) => (
                        <button
                          key={`afternoon-${index}`}
                          className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSlotClick(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="time-slot-section">
                    <p>Evening</p>
                    <div className="time-slots">
                      {timeSlots.evening.map((time, index) => (
                        <button
                          key={`evening-${index}`}
                          className={`time-slot ${selectedTimeSlot === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSlotClick(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedDate && selectedTimeSlot && (
                <div className="booking-summary">
                  <h3>Booking Summary</h3>
                  <div className="summary-details">
                    <div className="summary-item">
                      <Calendar size={18} />
                      <span>{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
                    </div>
                    <div className="summary-item">
                      <Clock size={18} />
                      <span>{selectedTimeSlot}</span>
                    </div>
                  </div>
                  <button 
                    className="confirm-button"
                    onClick={handleBookAppointment}
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
