import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Share Your Journey with Co Ride</h1>
            <p>Connect with fellow travelers, save money, and reduce your carbon footprint with our trusted carpool platform.</p>
            <div className="hero-buttons">
              <Link to="/find-ride" className="btn btn-primary btn-large">Find a Ride</Link>
              <Link to="/offer-ride" className="btn btn-outline btn-large">Offer a Ride</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Co Ride?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Save Money</h3>
              <p>Split fuel costs and reduce your travel expenses significantly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Reduce carbon emissions by sharing rides and helping the environment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Meet People</h3>
              <p>Connect with like-minded travelers and make new friends.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & Secure</h3>
              <p>Verified profiles and secure payment system for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Search or Post</h3>
              <p>Find available rides or post your own journey</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Connect</h3>
              <p>Message other users and confirm your ride details</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Travel Together</h3>
              <p>Meet up and enjoy your shared journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;