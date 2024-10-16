// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Events from './pages/EventList'; 
import About from './pages/About';
import LoginPage from './pages/LoginPage'; 
import EventPage from './pages/EventPage'; 
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = ({ topEvents }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage topEvents={topEvents} />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/events/:id" element={<EventPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
