// helpers.js

/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format (e.g., '2024-11-20').
 * @returns {string} The formatted date (e.g., 'November 20, 2024').
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  /**
   * Calculates the remaining seats for an event.
   * @param {number} totalSeats - The total number of seats.
   * @param {number} bookedSeats - The number of seats already booked.
   * @returns {number} The number of available seats.
   */
  export const calculateAvailableSeats = (totalSeats, bookedSeats) => {
    return totalSeats - bookedSeats;
  };
  
  /**
   * Generates a unique identifier for events.
   * @returns {string} A unique identifier.
   */
  export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };
  
  /**
   * Validates an email address format.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if valid, false otherwise.
   */
  export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  /**
   * Capitalizes the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} The capitalized string.
   */
  export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  