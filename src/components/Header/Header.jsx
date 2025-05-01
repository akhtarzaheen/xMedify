import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Home, User, Pill, Building, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <h1 className="logo-text">MedCenter</h1>
            </Link>
          </div>
          
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <Home size={18} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <User size={18} />
                  <span>Find Doctors</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <Building size={18} />
                  <span>Hospitals</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <Pill size={18} />
                  <span>Medicines</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button 
              className="booking-button"
              onClick={() => navigate('/my-bookings')}
            >
              <Calendar size={18} />
              <span>My Bookings</span>
            </button>
          </div>
          
          <button className="mobile-menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;