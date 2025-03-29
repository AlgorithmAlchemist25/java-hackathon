import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Custom CSS for styling

function HomePage() {
  const navigate = useNavigate();

  // Navigate to Register page
  const handleRegister = () => {
    navigate('/register');
  };

  // Navigate to Login page
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>HARMONIQ</h1>
      <h2 className="statement">LET'S MAKE EVERY CONCERT AN UNFORGETTABLE EXPERIENCE.</h2>
      <div className="buttons-container">
        <button className="home-button" onClick={handleRegister}>
          Register
        </button>
        <button className="home-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default HomePage;
