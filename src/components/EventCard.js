import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event, onViewDetails, onBookTicket, isAuthenticated }) => {
  const {
    title,
    description,
    category,
    date,
    availableSeats,
    price,
  } = event;

  // Format the date for better readability
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">Date: {formattedDate}</p>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">
          {availableSeats > 0 ? `${availableSeats} seats available` : 'Fully booked'}
        </p>
        
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={() => onViewDetails(event)}>
            View Details
          </button>

          {availableSeats > 0 && isAuthenticated ? (
            <button className="btn btn-success" onClick={() => onBookTicket(event)}>
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
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    availableSeats: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
  onBookTicket: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default EventCard;
