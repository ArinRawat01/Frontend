import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

function Contact() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the message to show after form submission
    setMessage('Your message has been sent!');
    
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      query: '',
    });

    // Optionally, you can reload the page or reset form data after a timeout
    setTimeout(() => {
      setMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: info@educationportal.com</p>
        <p>Phone: +919634963207</p>
        <p>Address: UPES,Bidholi,Premnagar-248001</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="query">Your Query</label>
            <textarea
              id="query"
              name="query"
              required
              value={formData.query}
              onChange={handleChange}
              placeholder="Type here if you have a query..."
            />
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
        {message && <div className="message-popup">{message}</div>}
      </div>

      {/* Added text and icons above the footer */}
      <div className="social-media">
        <p>For more information, follow us on social media:</p>
        <div className="social-icons">
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaFacebookF className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
