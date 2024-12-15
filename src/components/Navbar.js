import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { FaSignOutAlt } from 'react-icons/fa'; // Import logout icon from React Icons
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Logout function
  const handleLogout = () => {
    // Clear session/localStorage or tokens if used for authentication
    localStorage.removeItem('user'); // Assuming 'user' is stored in localStorage

    // Redirect to homepage or login page after logout
    navigate('/'); // Redirect to the homepage or login page
  };

  return (
    <nav className="navbar">
      <h1>Edcademy</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/exam-schedule">Exam Schedule</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/timetable">Timetable</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {/* Align the logout icon properly */}
      <div className="logout-container">
        <FaSignOutAlt className="logout-icon" onClick={handleLogout} />
      </div>
    </nav>
  );
};

export default Navbar;
