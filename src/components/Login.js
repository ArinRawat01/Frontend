import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src="/images/educore.png" alt="Educore Logo" className="logo" />
      </div>
      <div className={`login-form ${showSignUp ? 'slide-up' : ''}`}>
        <h2>{showSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" required />
          </div>
          <div className="form-actions">
            <button type="submit" className="login-btn">{showSignUp ? 'Sign Up' : 'Login'}</button>
            <div className="links">
              <button type="button" className="toggle-btn" onClick={() => setShowSignUp(!showSignUp)}>
                {showSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
              </button>
              <button type="button" className="forgot-password-btn" onClick={() => {/* Trigger password recovery logic */}}>
                Forgot Password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
