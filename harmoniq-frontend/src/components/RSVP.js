import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './RSVP.css';
import logo from '../images/image 5.png';

function RSVP({ concertId }) {
  const [form, setForm] = useState({ attenderName: '', attenderEmail: '' });
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [showReviewButton, setShowReviewButton] = useState(false); // ✅ New state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRSVP = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, concertId })
      });
      const data = await response.json();
      setQrCode(data.qrCodeData);
      setShowReviewButton(true); // ✅ Show review button after QR generated
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="rsvp-container">
      <header className="rsvp-header">
        <img src={logo} alt="Logo" className="rsvp-logo" />
        <h1 className="rsvp-invite">INVITATION</h1>
      </header>

      <div className="rsvp-box">
        <div className="instructions-title">INSTRUCTIONS</div>
        <div className="instructions-box">
          <ul>
            <li>Bring a valid id proof.</li>
            <li>Listen to the security people.</li>
            <li>
              Take care of personal belongings yourself. In case of any
              mishappenings, neither the organizer nor the artist is responsible.
            </li>
          </ul>
        </div>

        <input
          type="text"
          name="attenderName"
          placeholder="Your name"
          value={form.attenderName}
          onChange={handleChange}
          className="input-field"
          required
        />

        <input
          type="email"
          name="attenderEmail"
          placeholder="Your email Id"
          value={form.attenderEmail}
          onChange={handleChange}
          className="input-field"
          required
        />

        <p className="attend-question">Attend the concert?</p>

        {!qrCode && (
          <button onClick={handleRSVP} className="rsvp-button" disabled={loading}>
            {loading ? 'Generating QR...' : 'RSVP'}
          </button>
        )}

        {qrCode && (
          <div className="qr-container">
            <h3>Your QR Code:</h3>
            <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
          </div>
        )}

        {showReviewButton && (
          <button className="review-button" onClick={() => navigate('/rate')}>
            Rate App
          </button>
        )}
      </div>
    </div>
  );
}

export default RSVP;
