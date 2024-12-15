import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed Navigate import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Courses from './components/Courses';
import ExamSchedule from './components/ExamSchedule';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
import Contact from './components/Contact';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
  };

  return (
    <Router>
      {/* If user is logged in, render Navbar and Footer, otherwise only show Login page */}
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/exam-schedule" element={<ExamSchedule />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        // Show Login page if not logged in
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
