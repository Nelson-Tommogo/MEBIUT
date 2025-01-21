import React, { useState } from 'react';
import './OurShop.css';
import { FaSearch, FaShoppingCart, FaTrashAlt, FaTimes } from 'react-icons/fa';
import Footer from "../../components/Footer";
import product1 from '../../assets/home/3.jpg'; 
import product2 from '../../assets/home/2.jpg'; 
import product3 from '../../assets/home/product3.jpeg'; 
import product4 from '../../assets/home/9.jpg'; 

const products = [
  { id: 1, name: 'Kenyan Taste', description: '340g', image: product1, price: 390 },
  { id: 2, name: 'Kenyan Taste', description: '240g', image: product2, price: 260 },
  { id: 3, name: 'Mayonnaise', description: '340g', image: product3, price: 350 },
  { id: 4, name: 'Kenyan Taste', description: '140g', image: product4, price: 160 },
];

const OurShop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationInput, setLocation] = useState('');
  const [useLiveLocation, setUseLiveLocation] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const updateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const validatePhoneNumber = (number) => {
    const cleanedNumber = number.replace(/\s+/g, '');
    const phoneRegex = /^(07\d{8}|01\d{8}|254\d{9})$/; 
    return phoneRegex.test(cleanedNumber);
  };
  
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    const valid = validatePhoneNumber(phoneNumber);
    setIsValidPhone(valid);

    if (valid) {
        const confirmation = window.confirm(`Confirm purchase of ${totalQuantity} Mebiut Sauces worth Ksh ${totalAmount}?`);
        if (!confirmation) return;

        setIsLoadingPayment(true);
        setMessage('');

        try {
            const response = await fetch('https://mbackend-lg66.onrender.com/api/stk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: totalAmount, phoneNumber }),
            });

            const data = await response.json();

            // Check if the response was successful
            if (response.ok) { // Adjusted check for successful response
                setMessage(data.message); // Show the message from the backend
            } else {
                setMessage(data.error || 'Failed to send payment request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoadingPayment(false);
        }
    } else {
        console.log('Invalid phone number');
    }
};



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
        alert('Geolocation is not supported by this browser.');
        setIsLoadingLocation(false);
      }
    }
  };

  return (
    <>
      <div className="our-shop-container">
        <header className="shop-header">
          <h1>Our Shop</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className="search-icon" size={20} />
          </div>
          <div className="cart-icon" onClick={toggleCart}>
            <FaShoppingCart size={30} />
            <span className="cart-count">{totalQuantity}</span>
          </div>
        </header>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Ksh {product.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Add to Basket
                </button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>

        {isCartOpen && (
          <div className="cart-dropdown">
            <div className="cart-header">
              <h3>Your Cart</h3>
              <FaTimes className="close-cart-btn" onClick={toggleCart} size={20} />
            </div>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <div className="cart-item-controls">
                          <button className="quantity-btn" onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button className="quantity-btn" onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                          <button className="remove-item-btn" onClick={() => removeFromCart(item)}>
                            <FaTrashAlt /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty</p>
            )}

            {cartItems.length > 0 && (
              <div className="cart-summary">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: Ksh {totalAmount}</p>
                <form onSubmit={handlePaymentSubmit} className="payment-form">
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
                    {!isValidPhone && <p className="error-message">Please enter a valid M-Pesa number (e.g., 07XXXXXXXX).</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Delivery Location</label>
                    <input
                      type="text"
                      id="location"
                      value={locationInput}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location or use live location"
                      disabled={useLiveLocation}
                      required={!useLiveLocation}
                    />
                  </div>

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

                  <button type="submit" className="submit-payment-btn" disabled={isLoadingPayment}>
                    {isLoadingPayment ? 'Processing...' : 'Submit Payment'}
                  </button>
                </form>

                {message && <p className="payment-message">{message}</p>}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OurShop;
