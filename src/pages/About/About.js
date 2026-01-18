import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="page-header">
          <h1>About Co Ride</h1>
          <p>Connecting travelers, building communities, and creating a sustainable future</p>
        </div>

        <div className="about-content">
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              At Co Ride, we believe that transportation should be affordable, sustainable, and social. 
              Our platform connects drivers with empty seats to passengers looking for a ride, creating 
              a win-win situation for everyone involved.
            </p>
          </section>

          <section className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🌍 Sustainability</h3>
                <p>Reducing carbon emissions by maximizing vehicle occupancy and promoting shared transportation.</p>
              </div>
              <div className="value-card">
                <h3>🤝 Community</h3>
                <p>Building connections between people and fostering a sense of community through shared journeys.</p>
              </div>
              <div className="value-card">
                <h3>🛡️ Safety</h3>
                <p>Ensuring the safety and security of all our users through verification and rating systems.</p>
              </div>
              <div className="value-card">
                <h3>💡 Innovation</h3>
                <p>Continuously improving our platform with new features and technologies to enhance user experience.</p>
              </div>
            </div>
          </section>

          <section className="stats">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Happy Users</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Rides Shared</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2M+</div>
                <div className="stat-label">Miles Traveled</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Tons CO₂ Saved</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;