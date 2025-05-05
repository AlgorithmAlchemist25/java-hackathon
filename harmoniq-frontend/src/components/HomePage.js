import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../images/image 5.png'; // Ensure this is the correct path to your logo

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="logo-container">
        <img src={logo} alt="Harmoniq Logo" className="logo" />
      </header>
      <h1 className="main-title">HARMONIQ</h1>
      <p className="tagline">Let’s make every concert an unforgettable experience.</p>
      <div className="button-section">
        <div className="btn-column">
          <p className="btn-caption">New to our family?</p>
          <button className="home-button" onClick={() => navigate('/register')}>
            Register now
          </button>
        </div>
        <div className="btn-column">
          <p className="btn-caption">Already a part of our family?</p>
          <button className="home-button" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

