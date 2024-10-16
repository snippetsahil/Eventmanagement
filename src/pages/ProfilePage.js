import React from 'react';
import { useAuth } from '../context/AuthContext'; // Custom hook for authentication context
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../styles/ProfilePage.module.css'; // Import your CSS module for additional styling

const ProfilePage = () => {
  const { user } = useAuth(); // Get the logged-in user from the authentication context
  const bookedEvents = user.bookedEvents || []; // User's booked events

  return (
    <div className="container my-5">
      <h1>User Profile</h1>
      <h2>Welcome, {user.name}!</h2>

      <h3>Booked Events</h3>
      {bookedEvents.length > 0 ? (
        <ul className="list-group">
          {bookedEvents.map((event) => (
            <li key={event.id} className="list-group-item">
              <h4>{event.title}</h4>
              <p>Date: {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>Seats Booked: {event.seatsBooked}</p>
              <p>Price: ${event.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No booked events found.</p>
      )}
    </div>
  );
};

export default ProfilePage;
