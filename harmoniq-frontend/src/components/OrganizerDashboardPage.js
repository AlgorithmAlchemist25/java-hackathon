import React, { useState } from 'react';
import axios from 'axios';
import './OrganizerDashboardPage.css';

function OrganizerDashboardPage() {
  const [concertData, setConcertData] = useState({
    organizer_id: '',
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    setConcertData({ ...concertData, [e.target.name]: e.target.value });
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
  const handleDateChange = (e) => {
    const formattedDate = e.target.value;
    setConcertData({ ...concertData, date: formattedDate });
  };

  return (
    <div className="container">
      <h2>Organizer Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
        type = "number"
        name = "organizer_id"
        placeholder="Organizer Id"
        value = {concertData.organizer_id}
        onChange = {handleChange}
        required/>
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
          type="date"  // Changed this to type="date"
          name="date"
          value={concertData.date}
          onChange={handleDateChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Concert Location"
          value={concertData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Concert</button>
      </form>
    </div>
  );
}

export default OrganizerDashboardPage;
