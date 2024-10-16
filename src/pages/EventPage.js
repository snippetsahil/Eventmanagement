// src/pages/EventPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventCard.module.css';
import '../styles/EventDetails.module.css';
import '../styles/EventList.module.css';
import { fetchEventById } from '../services/eventService'; // Use fetchEventById instead of getEventById

const EventPage = () => {
  const { id } = useParams(); // Corrected: useParams() does not take props
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const fetchedEvent = await fetchEventById(id); // Fetch event by ID
        setEvent(fetchedEvent);
      } catch (err) {
        setError('Failed to fetch event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      {event ? (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{event.title}</h1>
            <p className="card-text">{event.description}</p>
            <p className="card-text"><strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="card-text"><strong>Available Seats:</strong> {event.availableSeats}</p>
            <p className="card-text"><strong>Price:</strong> ${event.price}</p>
          </div>
        </div>
      ) : (
        <p>Event not found.</p>
      )}
    </div>
  );
};

export default EventPage;
