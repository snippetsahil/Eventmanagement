import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate here
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Events from './pages/EventList'; // Ensure this is the correct component
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import EventPage from './pages/EventPage'; // Ensure this is the correct component
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider, useAuth } from './context/AuthContext'; // Authentication context provider
import './styles/global.css'; // Import global styles
import './styles/variables.css'; // Import CSS variables
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes = () => {
  const { currentUser } = useAuth(); // Get the current user from the authentication context

  return (
    <Routes>
      <Route path="/" element={<HomePage topEvents={[]} />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={currentUser ? <Navigate to="/profile" /> : <LoginPage />} />
      <Route path="/events/:id" element={<EventPage />} />
      <Route path="/profile" element={currentUser ? <ProfilePage /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main>
            <AppRoutes /> {/* Use AppRoutes component for cleaner organization */}
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
