import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Trash2, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './MyBookings.css';

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookings, cancelBooking } = useAppContext();

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      cancelBooking(bookingId);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };
  console.log('booking=>', bookings);
  return (
    <div className="my-bookings-page">
      <div className="container">
        <button className="back-button" onClick={handleBackClick}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
        
        <h1>My Bookings</h1>
        
        {bookings.length > 0 ? (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div className="booking-card" key={booking.id}>
                <div className="booking-header">
                  <div className="booking-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="booking-title">
                    <h3>{booking.centerName}</h3>
                    <p className="booking-date">{booking.formattedDate} at {booking.timeSlot}</p>
                  </div>
                </div>
                
                <div className="booking-details">
                  <div className="detail-item">
                    <MapPin size={18} />
                    <span>{booking.centerAddress}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={18} />
                    <span>Appointment Time: {booking.timeSlot}</span>
                  </div>
                </div>
                
                <div className="booking-actions">
                  <button 
                    className="cancel-button"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    <Trash2 size={16} />
                    <span>Cancel Booking</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-bookings">
            <div className="no-bookings-icon">
              <Calendar size={48} />
            </div>
            <h2>You don't have any bookings yet</h2>
            <p>Start by searching for medical centers and book your first appointment</p>
            <button 
              className="search-button"
              onClick={() => navigate('/')}
            >
              Search Medical Centers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;


