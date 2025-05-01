import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MedCenter</h3>
            <p className="footer-description">
              Your trusted source for finding medical centers and booking appointments 
              with top healthcare providers across the USA.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Find Doctors</Link>
              </li>
              <li>
                <Link to="/">Hospitals</Link>
              </li>
              <li>
                <Link to="/">Medicines</Link>
              </li>
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} />
                <span>123 Healthcare Ave, Medical District, NY 10001</span>
              </li>
              <li>
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </li>
              <li>
                <Mail size={18} />
                <span>contact@medcenter.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MedCenter. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;