// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap'; // Import Bootstrap Alert

const PrivateRoute = ({ isAuthenticated, redirectTo = '/login' }) => {
  if (isAuthenticated) {
    return <Outlet />;
  }

  // If not authenticated, return a Bootstrap alert
  return (
    <div className="container mt-3">
      <Alert variant="warning">
        You need to be logged in to view this page. Redirecting to login...
      </Alert>
      <Navigate to={redirectTo} replace />
    </div>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // Boolean to check if the user is authenticated
  redirectTo: PropTypes.string, // Path to redirect to if not authenticated
};

export default PrivateRoute;
