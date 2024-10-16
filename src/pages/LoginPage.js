import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the import path accordingly
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/'); // Redirect to home or desired page after login
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Login</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to the signup page */}
      </div>
    </div>
  );
};

export default LoginPage;
