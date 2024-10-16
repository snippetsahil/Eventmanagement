// Pagination.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Pagination.module.css'; // Import your CSS module for styling

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`btn btn-outline-primary mx-1 ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {renderPageNumbers().map((pageNumber) => (
          <li key={pageNumber.key} className="page-item">
            {pageNumber}
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired, // Current page number
  totalPages: PropTypes.number.isRequired,  // Total number of pages
  onPageChange: PropTypes.func.isRequired,  // Callback when page changes
};

export default Pagination;
