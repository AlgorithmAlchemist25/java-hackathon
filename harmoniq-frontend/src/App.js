import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import OrganizerDashboard from './components/OrganizerDashboardPage';
import ConcertList from './components/ConcertDisplay';
import RatingForm from './components/RatingForm.js';
import RSVP from './components/RSVP';
import './components/HomePage.css';
import './components/RegisterPage.css';
import './components/LoginPage.css';
import './components/OrganizerDashboardPage.css';
import './components/RSVP.css';
import './components/RatingForm.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="/attendee-dashboard"  element = {<ConcertList />} />
        <Route path="/rsvp" element = {<RSVP />} />
        <Route path="/rate" element = {<RatingForm />} />
      </Routes>
    </div>
  );
}

export default App;
