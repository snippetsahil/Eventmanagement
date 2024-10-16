// src/pages/EventList.js

import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import FilterSearch from '../components/FilterSearch';
import Pagination from '../components/Pagination';
import { fetchEvents, bookTicket } from '../services/eventService'; // Make sure bookTicket is correctly imported
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
      setFilteredEvents(fetchedEvents);

      // Get unique categories for filtering
      const uniqueCategories = ['all', ...new Set(fetchedEvents.map(event => event.category))];
      setCategories(uniqueCategories);
    };

    loadEvents();
  }, []);

  // Filter events by category
  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.category === category);
      setFilteredEvents(filtered);
    }
    setCurrentPage(1);
  };

  // Search events by title
  const handleSearch = (searchTerm) => {
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
    setCurrentPage(1);
  };

  // Get current events based on pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle viewing details
  const handleViewDetails = (event) => {
    navigate(`/events/${event.id}`); // Navigate to EventPage with event ID
  };

  // Handle booking tickets
  const handleBookTicket = async (event) => {
    try {
      await bookTicket(event.id); // API call to update event seats
      const updatedEvents = events.map((e) =>
        e.id === event.id ? { ...e, availableSeats: e.availableSeats - 1 } : e
      );
      setEvents(updatedEvents);
      setFilteredEvents(updatedEvents);
    } catch (err) {
      console.error('Error booking ticket:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Events</h1>

      <FilterSearch
        categories={categories}
        onFilter={handleFilter}
        onSearch={handleSearch}
      />

      <div className="row">
        {currentEvents.map(event => (
          <div className="col-md-4" key={event.id}>
            <EventCard
              event={event}
              onViewDetails={handleViewDetails}
              onBookTicket={handleBookTicket}
              isAuthenticated={true} // Change this based on your auth logic
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredEvents.length / eventsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EventList;
