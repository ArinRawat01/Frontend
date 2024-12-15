import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="typing-animation">Welcome to Edcademy</h1>
        <p>
          At Edcademy,our dedication lies in revolutionizing education with innovation and excellence. 
          We aim to deliver exceptional learning opportunities, expert mentorship, and cutting-edge
          state-of-the-art facilities to help them achieve their academic and professional goals.
        </p>
        <p>
          Join us and explore a wide range of courses, meet our experienced faculty, and benefit from our 
          structured timetable and comprehensive exam schedules.
        </p>
      </div>
      <div className="home-image">
        <img src="/images/main.png" alt="Education Banner" />
      </div>
    </section>
  );
};

export default Home;
