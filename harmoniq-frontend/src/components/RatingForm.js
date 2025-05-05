import { useState } from "react";
import "./RatingForm.css";
import logo from "../images/image 5.png"; // Make sure you have this logo image

function RatingForm() {
  const [rating, setRating] = useState(5);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { rating, email };

    try {
      const res = await fetch(
        `http://localhost:8080/api/ratings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setMessage(`Thankyou for rating our app.`);
      } else {
        setMessage(`Error ${res.status}`);
      }
    } catch (err) {
      setMessage("Network error");
    }
  };

  return (
    <div className="rating-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <h1 className="rating-title">RATING</h1>
      <div className="form-content">
        <div className="form-group">
          <label>Rating(1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(+e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <button 
        onClick={handleSubmit} 
        className="submit-btn">
        SUBMIT
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default RatingForm;