import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../styles/HomePage.module.css'; // Import your CSS module for additional styling
import { useAuth } from '../context/AuthContext'; // Import your authentication context

const HomePage = ({ topEvents }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication status from context

  return (
    <div className="container my-5">
      <h1 className="text-center">Welcome to the Event Booking System</h1>
      <p className="lead text-center">Discover and book your favorite events!</p>

      <h2 className="mt-4">Top Events</h2>
      {isAuthenticated ? (
        topEvents.length > 0 ? (
          <ul className="list-group">
            {topEvents.map((event) => (
              <li key={event.id} className="list-group-item">
                <Link to={`/events/${event.id}`} className="text-decoration-none">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br />
                    <strong>Seats Available:</strong> {event.availableSeats} <br />
                    <strong>Price:</strong> ${event.price}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-danger text-center">No events available at the moment.</p>
        )
      ) : (
        <ul className="list-group">
          {topEvents.map((event) => (
            <li key={event.id} className="list-group-item">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br />
                <strong>Seats Available:</strong> {event.availableSeats} <br />
                <strong>Price:</strong> ${event.price}
              </p>
              <p className="text-warning">Please <Link to="/login" className="text-decoration-none">log in</Link> to view details.</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
