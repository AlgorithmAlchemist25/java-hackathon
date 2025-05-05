import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';
import logo from '../images/image 5.png'; // adjust the path as needed

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'organizer'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/users/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role.toUpperCase()
      }, {
        headers: { "Content-Type": "application/json" }
      });

      alert("Registration successful! Redirecting to login...");
      navigate("/login");

    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
      alert("Registration failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <>
      <div className="header">
          <img src={logo} alt="Logo" className="logo" />
        <h1 className="Register">REGISTER</h1>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="ORGANIZER">ORGANIZER</option>
            <option value="ATTENDEE">ATTENDEE</option>
          </select>
          <button type="submit" className="submit">REGISTER</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
