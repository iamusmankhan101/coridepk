import React, { useState } from 'react';
import './OfferRide.css';

const OfferRide = () => {
  const [rideData, setRideData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: 1,
    price: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setRideData({
      ...rideData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Offering ride:', rideData);
  };

  return (
    <div className="offer-ride">
      <div className="container">
        <div className="page-header">
          <h1>Offer a Ride</h1>
          <p>Share your journey and help others reach their destination</p>
        </div>

        <div className="offer-form-section">
          <form onSubmit={handleSubmit} className="offer-form">
            <div className="form-section">
              <h3>Route Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from">From</label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    value={rideData.from}
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
                    value={rideData.to}
                    onChange={handleInputChange}
                    placeholder="Enter destination city"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Date & Time</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={rideData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Departure Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={rideData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Ride Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="seats">Available Seats</label>
                  <select
                    id="seats"
                    name="seats"
                    value={rideData.seats}
                    onChange={handleInputChange}
                  >
                    <option value={1}>1 seat</option>
                    <option value={2}>2 seats</option>
                    <option value={3}>3 seats</option>
                    <option value={4}>4 seats</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price per Seat ($)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={rideData.price}
                    onChange={handleInputChange}
                    placeholder="Enter price per seat"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label htmlFor="description">Additional Information</label>
                <textarea
                  id="description"
                  name="description"
                  value={rideData.description}
                  onChange={handleInputChange}
                  placeholder="Add any additional details about your ride (optional)"
                  rows="4"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Publish Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferRide;