// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Header.module.css'; // Import your CSS module for styling

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Event Booking</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>

            <div className="auth-section">
              {isLoggedIn ? (
                <button onClick={onLogout} className="btn btn-danger">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // Boolean to track if the user is logged in
  onLogout: PropTypes.func.isRequired, // Function to handle the logout action
};

export default Header;
