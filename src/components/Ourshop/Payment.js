import React, { useState } from 'react';
import './Payment.css';
import { FaMapMarkerAlt, FaTruck } from 'react-icons/fa'; // Location and truck icons

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [useLiveLocation, setUseLiveLocation] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);

  // Validate phone number (should start with '07' and have 10 digits)
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^07\d{8}$/; // Kenyan M-Pesa phone number format
    return phoneRegex.test(number);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validatePhoneNumber(phoneNumber);
    setIsValidPhone(valid);

    if (valid) {
      // Submit payment logic if phone number is valid
      console.log('Phone Number:', phoneNumber);
      console.log('Location:', location);
      // Trigger payment and tracking logic here
    } else {
      console.log('Invalid phone number');
    }
  };

  // Handle live location
  const handleUseLiveLocation = () => {
    if (!useLiveLocation) {
      setIsLoadingLocation(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Lat: ${latitude}, Long: ${longitude}`);
            setUseLiveLocation(true);
            setIsLoadingLocation(false);
          },
          (error) => {
            console.error('Error getting location:', error);
            setIsLoadingLocation(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setIsLoadingLocation(false);
      }
    } else {
      setUseLiveLocation(false);
      setLocation('');
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Payment</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="payment-form">

        {/* Phone Number Input */}
        <div className="form-group">
          <label htmlFor="phoneNumber">M-Pesa Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
            className={!isValidPhone ? 'error' : ''}
          />
          {!isValidPhone && (
            <p className="error-message">Please enter a valid M-Pesa number (e.g., 07XXXXXXXX).</p>
          )}
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label htmlFor="location">
            <FaMapMarkerAlt className="icon" /> Delivery Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location or use live location"
            disabled={useLiveLocation}
            required={!useLiveLocation}
          />
        </div>

        {/* Live Location Button */}
        <div className="form-group">
          <button
            type="button"
            className={`live-location-btn ${useLiveLocation ? 'active' : ''}`}
            onClick={handleUseLiveLocation}
            disabled={isLoadingLocation}
          >
            {isLoadingLocation ? 'Getting Location...' : (useLiveLocation ? 'Using Live Location' : 'Use Live Location')}
          </button>
        </div>

        {/* Delivery Info */}
        <p className="delivery-info">
          <FaTruck className="icon" /> Free delivery within Nairobi CBD. Additional charges apply for delivery outside Nairobi.
        </p>

        {/* Submit Button */}
        <button type="submit" className="submit-payment-btn">
          Submit Payment
        </button>
      </form>

      {/* Product Tracking */}
      <div className="tracking-section">
        <h3>Track Your Order</h3>
        <p>After completing your payment, you will be able to track your order here.</p>
        <input type="text" placeholder="Enter your tracking number" />
        <button className="track-btn">Track Order</button>
      </div>
    </div>
  );
};

export default Payment;
