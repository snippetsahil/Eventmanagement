// About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../styles/About.module.css'; // Import your CSS module for additional styling

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center">
        Welcome to our Event Booking System! We strive to connect people with amazing events happening around them. Whether you're interested in concerts, workshops, or community gatherings, we have something for everyone.
      </p>
      
      <h2 className="mt-4">Our Mission</h2>
      <p>
        Our mission is to provide a seamless and user-friendly platform for event organizers and attendees. We believe that discovering and booking events should be simple and enjoyable.
      </p>
      
      <h2 className="mt-4">Features</h2>
      <ul className="list-group mb-4">
        <li className="list-group-item">Search and filter events by category</li>
        <li className="list-group-item">Book tickets easily with available seating</li>
        <li className="list-group-item">User authentication for a personalized experience</li>
        <li className="list-group-item">Responsive design for all devices</li>
      </ul>
      
      <h2 className="mt-4">Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at <a href="mailto:sahilyadav0608@gmail.com">sahilyadav0608@gmail.com</a>.
      </p>
    </div>
  );
};

export default About;
