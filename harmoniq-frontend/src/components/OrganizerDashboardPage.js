import React, { useState } from 'react';
import axios from 'axios';
import './OrganizerDashboardPage.css';
import logo from '../images/image 5.png'; // Update path if different

function OrganizerDashboardPage() {
  const [concertData, setConcertData] = useState({
    organizer: { id: localStorage.getItem('userId') || '' },
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'organizer_id') {
      setConcertData({
        ...concertData,
        organizer: { id: e.target.value }
      });
    } else {
      setConcertData({ ...concertData, [e.target.name]: e.target.value });
    }
  };

  const handleDateChange = (e) => {
    const formattedDate = e.target.value;
    setConcertData({ ...concertData, date: formattedDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/concerts/create', concertData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Concert created successfully:', response.data);
      alert('Concert created successfully!');
    } catch (error) {
      console.error('Error creating concert:', error.response ? error.response.data : error.message);
      alert('Error creating concert: ' + (error.response ? error.response.data.message : 'Unknown error'));
    }
  };

  return (
    <div className="organizer-dashboard">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className="dashboard-heading">Organizer Dashboard</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="organizer_id"
            placeholder="Organizer Id"
            value={concertData.organizer.id}
            onChange={handleChange}
            readOnly
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Concert Title"
            value={concertData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Concert Description"
            value={concertData.description}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={concertData.date}
            onChange={handleDateChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={concertData.location}
            onChange={handleChange}
            required
          />
          <button type="submit" className="create-button">Create Concert</button>
        </form>
      </div>
    </div>
  );
}

export default OrganizerDashboardPage;
