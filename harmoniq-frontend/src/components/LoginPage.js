import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

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
      localStorage.setItem('role', response.data.role);
      // Check the role and navigate accordingly
      if (response.data.role === 'ORGANIZER') {
        // This is where the navigation should happen if role is "ORGANIZER"
        navigate('/organizer-dashboard');
      }else{
        alert('Only organizers can access this page');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      alert('Login failed: ' + (error.response ? error.response.data.message : 'Unknown error'));
    }
  };

  return (
    <div className="container">
     <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
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
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
