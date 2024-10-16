// FilterSearch.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterSearch.module.css'; // Import your CSS module for styling

const FilterSearch = ({ categories, onFilter, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle changes in the search input field
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the search function in the parent component
  };

  // Handle changes in the category dropdown
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilter(value); // Call the filter function in the parent component
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search events by title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-dropdown ms-3">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

FilterSearch.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of categories for filtering
  onFilter: PropTypes.func.isRequired, // Function to call when category changes
  onSearch: PropTypes.func.isRequired, // Function to call when search input changes
};

export default FilterSearch;
