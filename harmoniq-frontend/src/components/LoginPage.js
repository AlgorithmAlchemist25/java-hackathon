import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import logo from '../images/image 5.png'; // Make sure the path is correct

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      const user = response.data;
      localStorage.setItem('userId', user.id);
      localStorage.setItem('userRole', user.role);
      if (user.role === 'ORGANIZER') {
        navigate('/organizer-dashboard');
      } else {
        navigate('/attendee-dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      alert('Login failed: ' + (error.response ? error.response.data.message : 'Unknown error'));
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className="login-heading">LOGIN</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
