// BookingButton.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingButton = ({ availableSeats, onBook }) => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (availableSeats > 0) {
      onBook();
      setIsBooked(true);
    }
  };

  return (
    <div>
      {availableSeats > 0 ? (
        <button 
          onClick={handleBooking} 
          disabled={isBooked}
          className={`book-button ${isBooked ? 'booked' : ''}`}
        >
          {isBooked ? 'Ticket Booked' : 'Book Ticket'}
        </button>
      ) : (
        <span className="no-seats">No Seats Available</span>
      )}
    </div>
  );
};

BookingButton.propTypes = {
  availableSeats: PropTypes.number.isRequired, // Number of available seats
  onBook: PropTypes.func.isRequired, // Function to handle the booking logic
};

export default BookingButton;
