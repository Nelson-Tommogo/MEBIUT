import React, { useState, useEffect } from 'react';
import './OurShop.css';
import { FaSearch, FaShoppingCart, FaTrashAlt, FaTimes, FaCheck, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import Footer from "../../components/Footer";
import product1 from '../../assets/home/11.jpg'; 
import product2 from '../../assets/home/4.jpg'; 
import product3 from '../../assets/home/2.jpg'; 

const products = [
  { id: 1, name: 'Kenyan Taste', description: '340g', image: product1, price: 450 },
  { id: 2, name: 'Kenyan Taste', description: '250g', image: product2, price: 300 },
  { id: 3, name: 'Mayonnaise', description: '340g', image: product3, price: 400 },
  { id: 6, name: 'Kenyan Taste', description: '300g', image: product2, price: 320 },
];

const OurShop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'processing', 'success', 'error'
  const [message, setMessage] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  // Toggle cart and reset payment status when opening
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen) {
      setPaymentStatus(null);
      setMessage('');
    }
  };

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cart = document.querySelector('.cart-dropdown');
      const cartIcon = document.querySelector('.cart-icon');
      
      if (isCartOpen && cart && !cart.contains(event.target) && 
          cartIcon && !cartIcon.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen]);

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      return existing 
        ? prev.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1} 
              : item
          )
        : [...prev, {...product, quantity: 1}];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? {...item, quantity: newQuantity} : item
        )
      );
    }
  };

  // Search and sort
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSortChange = (e) => setSortCriteria(e.target.value);

  const applyFilterAndSort = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortCriteria) {
      case 'price-asc': return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...filtered].sort((a, b) => b.price - a.price);
      case 'name-asc': return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc': return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default: return filtered;
    }
  };

  const sortedProducts = applyFilterAndSort();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Payment handling
  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return /^(07|01|254)\d{8}$/.test(cleaned);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhoneNumber(phoneNumber)) {
      setIsValidPhone(false);
      setMessage('Please enter a valid M-Pesa number (e.g., 07XXXXXXXX)');
      setPaymentStatus('error');
      return;
    }

    const productList = cartItems.map(item => 
      `${item.quantity} ${item.name}${item.quantity > 1 ? 's' : ''}`
    ).join(', ');

    const confirmMessage = `Confirm purchase of ${productList} for Ksh ${totalAmount}?`;
    if (!window.confirm(confirmMessage)) return;

    setIsProcessing(true);
    setPaymentStatus('processing');
    setMessage('Sending payment request...');

    try {
      const response = await fetch('https://mbackend-lg66.onrender.com/api/stk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: totalAmount, 
          phoneNumber: phoneNumber.replace(/\D/g, '')
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Payment request sent successfully! Check your phone to complete.');
        setPaymentStatus('success');
        setCartItems([]);
        setPhoneNumber('');
      } else {
        throw new Error(data.error || 'Payment failed');
      }
    } catch (error) {
      setMessage('Payment request failed. Please try again.');
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const continueShopping = () => {
    setIsCartOpen(false);
    setPaymentStatus(null);
    setMessage('');
  };

  return (
    <>
      <div className="our-shop-container">
        <header className="shop-header">
          <h1>Our Shop</h1>
          <div className="search-sort-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="sort-bar">
              <select value={sortCriteria} onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
          <div className="cart-icon" onClick={toggleCart}>
            <FaShoppingCart />
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </div>
        </header>

        <div className="products-wrapper">
          <div className="product-grid">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Ksh {product.price}</p>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => addToCart(product)}
                  >
                    Add to Basket
                  </button>
                </div>
              ))
            ) : (
              <div className="no-products">No products found</div>
            )}
          </div>
        </div>

        <div className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Your Cart ({totalQuantity})</h3>
            <button className="close-cart-btn" onClick={toggleCart}>
              <FaTimes />
            </button>
          </div>

          {paymentStatus === 'success' ? (
            <div className="payment-success">
              <FaCheck className="success-icon" />
              <p className="success-message">{message}</p>
              <button 
                className="continue-shopping-btn"
                onClick={continueShopping}
              >
                Continue Shopping
              </button>
            </div>
          ) : cartItems.length > 0 ? (
            <>
              <div className="cart-items-container">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>Ksh {item.price} × {item.quantity}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>Ksh {totalAmount}</span>
                </div>

                {paymentStatus === 'processing' ? (
                  <div className="processing-payment">
                    <FaSpinner className="spinner" />
                    <p>Sending payment request...</p>
                  </div>
                ) : paymentStatus === 'error' ? (
                  <div className="payment-error">
                    <FaTimesCircle className="error-icon" />
                    <p className="error-message">{message}</p>
                  </div>
                ) : (
                  <form onSubmit={handlePaymentSubmit} className="payment-form">
                    <div className="form-group">
                      <label htmlFor="phone">M-Pesa Number</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          setIsValidPhone(true);
                        }}
                        placeholder="e.g. 0712345678"
                        required
                        className={!isValidPhone ? 'error' : ''}
                      />
                      {!isValidPhone && (
                        <p className="validation-error">Invalid phone number format</p>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      className="checkout-btn"
                      disabled={isProcessing}
                    >
                      Pay Ksh {totalAmount}
                    </button>
                  </form>
                )}
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <button className="continue-shopping-btn" onClick={toggleCart}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurShop;