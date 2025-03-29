import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./RegisterPage.css";

function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'organizer' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/users/register", 
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role.toUpperCase()
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
  
      console.log("Registration successful:", response.data);
      alert("Registration successful! Redirecting to login...");
  
      // Navigate to login page after successful registration
      navigate("/login");
  
    } catch (error) {
      console.error("Error registering:", error.response ? error.response.data : error.message);
      alert("Registration failed: " + (error.response ? error.response.data.message : "Unknown error"));
    }
  };
  

  return (
    <div className="container">
    <h2 className="Register">Register</h2>
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
      <button type="submit" className="submit">Register</button>
    </form>
  </div>
);
}

export default RegisterPage;
