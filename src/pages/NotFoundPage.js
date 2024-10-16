import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../styles/NotFoundPage.module.css'; // Import your CSS module for additional styling

const NotFoundPage = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
