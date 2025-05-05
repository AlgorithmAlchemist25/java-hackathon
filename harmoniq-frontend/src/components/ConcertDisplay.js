import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./ConcertDisplay.css";
import logo from '../images/image 5.png';
import concert1 from "../images/concert1.jpg";
import concert2 from "../images/concert2.jpg";
import concert3 from "../images/concert3.jpg";

const imageMap = {
  "concert1.jpg": concert1,
  "concert2.jpg": concert2,
  "concert3.jpg": concert3,
};

const ConcertDisplay = () => {
  const [concerts, setConcerts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/concerts/all?t=${Date.now()}`) // Prevents caching
      .then((response) => {
        const validConcerts = response.data.filter(
          (concert) => concert.organizer && concert.organizer.role === "ORGANIZER"
        );
        setConcerts(validConcerts);
      })
      .catch((error) => console.error("Error fetching concerts:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <h1 className="dashboard-title">ATTENDEE DASHBOARD</h1>
      </header>

      <div className="concert-sections">
        {concerts.length === 0 ? (
          <p className="no-concerts">No concerts available.</p>
        ) : (
          concerts.map((concert, index) => (
            <div className="concert-card" key={concert.id || index}>
              <img
                src={imageMap[concert.image] || concert1}
                alt={concert.title}
                className="concert-image"
              />
              <div className="concert-details">
                <p><strong>ID:</strong> {concert.id}</p>
                <p><strong>Title:</strong> {concert.title}</p>
                <p><strong>Location:</strong> {concert.location}</p>
                <p><strong>Date:</strong> {concert.date?.split("T")[0]}</p>
              </div>
              <button className="book-button" onClick={() => navigate('/rsvp')}>BOOK NOW</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConcertDisplay;
