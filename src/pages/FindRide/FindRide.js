import React, { useState } from 'react';
import './FindRide.css';

const FindRide = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  });

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for rides:', searchData);
  };

  return (
    <div className="find-ride">
      <div className="container">
        <div className="page-header">
          <h1>Find a Ride</h1>
          <p>Search for available rides that match your travel plans</p>
        </div>

        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={searchData.from}
                  onChange={handleInputChange}
                  placeholder="Enter departure city"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={searchData.to}
                  onChange={handleInputChange}
                  placeholder="Enter destination city"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={searchData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="passengers">Passengers</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={searchData.passengers}
                  onChange={handleInputChange}
                >
                  <option value={1}>1 passenger</option>
                  <option value={2}>2 passengers</option>
                  <option value={3}>3 passengers</option>
                  <option value={4}>4+ passengers</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-large">
              Search Rides
            </button>
          </form>
        </div>

        <div className="results-section">
          <h2>Available Rides</h2>
          <div className="ride-card">
            <div className="ride-info">
              <div className="route">
                <span className="from">New York</span>
                <span className="arrow">→</span>
                <span className="to">Boston</span>
              </div>
              <div className="details">
                <span className="date">Jan 25, 2024</span>
                <span className="time">2:00 PM</span>
                <span className="price">$25</span>
              </div>
            </div>
            <div className="driver-info">
              <div className="driver-avatar">JD</div>
              <div className="driver-details">
                <h4>John Doe</h4>
                <div className="rating">⭐ 4.8 (24 reviews)</div>
              </div>
            </div>
            <button className="btn btn-outline">Book Ride</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRide;