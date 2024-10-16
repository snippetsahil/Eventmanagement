// EventDetails.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EventDetails.module.css'; // Import your CSS module for styling

const EventDetails = ({ event, onBookTicket, isAuthenticated }) => {
  const {
    title,
    description,
    category,
    date,
    availableSeats,
    price,
    location,
  } = event;

  // Format the date for better readability
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <div className="event-meta mb-3">
            <p className="card-text"><strong>Category:</strong> {category}</p>
            <p className="card-text"><strong>Date:</strong> {formattedDate}</p>
            <p className="card-text"><strong>Location:</strong> {location}</p>
            <p className="card-text"><strong>Price:</strong> ${price}</p>
            <p className="card-text">
              <strong>Available Seats:</strong> {availableSeats > 0 ? `${availableSeats} seats available` : 'Fully booked'}
            </p>
          </div>

          <p className="card-text">{description}</p>

          <div className="event-actions">
            {availableSeats > 0 && isAuthenticated ? (
              <button className="btn btn-primary" onClick={() => onBookTicket(event)}>
                Book Ticket
              </button>
            ) : (
              <button className="btn btn-secondary" disabled>
                {isAuthenticated ? 'Fully booked' : 'Login to book'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    availableSeats: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired, // Added location to show venue or place of the event
  }).isRequired,
  onBookTicket: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default EventDetails;
