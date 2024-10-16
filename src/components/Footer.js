// Footer.js
import React from 'react';
import '../styles/Footer.module.css'; // Import your CSS module for styling

const Footer = () => {
  return (
    <footer className="footer-container bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Event Booking System. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="me-3">
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-dark">Terms of Service</a>
              </li>
              <li className="me-3">
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-dark">Privacy Policy</a>
              </li>
              <li>
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-dark">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
