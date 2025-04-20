import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ConcertDisplay.css";
import logo from "../images/logo.jpg";
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

  useEffect(() => {
    axios.get("http://localhost:8080/api/concerts") // adjust port if needed
      .then((response) => {
        setConcerts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching concert data:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <h1 className="dashboard-title">ATTENDEE DASHBOARD</h1>
      </header>

      <div className="concert-sections">
        {concerts.map((concert, index) => (
          <div className="concert-card" key={index}>
            <img
              src={imageMap[concert.image] || concert1}
              alt={concert.title}
              className="concert-image"
            />
            <div className="concert-details">
              <p><strong>id -</strong> {concert.id}</p>
              <p><strong>title-</strong> {concert.title}</p>
              <p><strong>place -</strong> {concert.place}</p>
              <p><strong>date-</strong> {concert.date}</p>
              <p><strong>time-</strong> {concert.time}</p>
            </div>
            <button className="book-button">BOOK NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertDisplay;
