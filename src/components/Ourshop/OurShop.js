import React, { useState, useEffect } from 'react';
import './OurShop.css';
import { FaSearch, FaShoppingCart, FaTrashAlt, FaTimes, FaCheck, FaTimesCircle, FaSpinner, FaFilter, FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import Footer from "../../components/Footer";

import KenyanTaste340 from '../../assets/home/2.jpg';
import ChillySauce from '../../assets/home/chilly.jpg';
import Mayonnaise from '../../assets/home/4.jpg';
import KenyanTaste250 from '../../assets/home/11.jpg';

const products = [
  { 
    id: 1, 
    name: 'Kenyan Taste Sauce', 
    description: '340g - Authentic Kenyan flavor', 
    image: KenyanTaste340, 
    price: 450, 
    rating: 4.8, 
    category: 'sauces' 
  },
  { 
    id: 2, 
    name: 'Kenyan Taste Sauce', 
    description: '250g - Perfect for family meals', 
    image: KenyanTaste250, 
    price: 300, 
    rating: 4.5, 
    category: 'sauces' 
  },
  { 
    id: 3, 
    name: 'Mebiut Mayonnaise', 
    description: '340g - Creamy and rich', 
    image: Mayonnaise, 
    price: 400, 
    rating: 4.7, 
    category: 'mayonnaise' 
  },
  { 
    id: 4, 
    name: 'Chilly Sauce', 
    description: '250g - Spicy and flavorful', 
    image: ChillySauce, 
    price: 250, 
    rating: 4.3, 
    category: 'chilly-sauce' 
  },
];

const OurShop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mebiutCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mebiutCart', JSON.stringify(cartItems));
  }, [cartItems]);

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
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
      } else {
        return [...prev, {...product, quantity: 1}];
      }
    });
    
    // Show notification
    setMessage(`Added ${product.name} to cart!`);
    setTimeout(() => setMessage(''), 2000);
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

  const clearCart = () => {
    setCartItems([]);
    setMessage('Cart cleared!');
    setTimeout(() => setMessage(''), 2000);
  };

  // Search, sort and filter
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSortChange = (e) => setSortCriteria(e.target.value);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  const applyFilterAndSort = () => {
    let filtered = products;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply sorting
    switch (sortCriteria) {
      case 'price-asc': return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...filtered].sort((a, b) => b.price - a.price);
      case 'name-asc': return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc': return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating': return [...filtered].sort((a, b) => b.rating - a.rating);
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
      // Format phone number for M-Pesa (add country code if missing)
      let formattedPhone = phoneNumber.replace(/\D/g, '');
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1);
      } else if (!formattedPhone.startsWith('254')) {
        formattedPhone = '254' + formattedPhone;
      }

      const response = await fetch('https://mbackend-lg66.onrender.com/api/stk', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: totalAmount, 
          phoneNumber: formattedPhone
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Payment request sent successfully! Check your phone to complete.');
        setPaymentStatus('success');
        
        // Clear cart after successful payment
        setTimeout(() => {
          setCartItems([]);
          setPhoneNumber('');
        }, 2000);
      } else {
        throw new Error(data.error || data.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setMessage(error.message || 'Payment request failed. Please try again.');
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

  const categories = ['all', 'sauces', 'mayonnaise', 'chilly-sauce'];

  return (
    <>
      <div className="our-shop-container">
        {/* Notification Message */}
        {message && (
          <div className="notification">
            {message}
          </div>
        )}
        
        <header className="shop-header">
          <div className="shop-hero">
            <h1>Mebiut Shop</h1>
            <p>Authentic Kenyan Sauces & Mayonnaise</p>
          </div>
          
          <div className="shop-controls">
            <div className="search-container">
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <button 
                className="filter-toggle"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <FaFilter />
                Filters
              </button>
            </div>

            <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
              <div className="filter-section">
                <h4>Category</h4>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category === 'all' ? 'All Products' : 
                       category === 'sauces' ? 'Sauces' :
                       category === 'mayonnaise' ? 'Mayonnaise' :
                       category === 'chilly-sauce' ? 'Chilly Sauce' : category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4>Sort by</h4>
                <select value={sortCriteria} onChange={handleSortChange} className="sort-select">
                  <option value="">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Enhanced Cart Button - More Visible */}
          <div className="cart-icon-container">
            <div className="cart-icon" onClick={toggleCart}>
              <FaShoppingCart />
              {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
            </div>
            {totalQuantity > 0 && (
              <div className="cart-notification-badge">{totalQuantity}</div>
            )}
          </div>
        </header>

        <main className="products-section">
          <div className="products-grid">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-overlay">
                      <button 
                        className="quick-add-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="product-badge">Popular</div>
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                          />
                        ))}
                      </div>
                      <span className="rating-value">{product.rating}</span>
                    </div>
                    
                    <div className="product-price">Ksh {product.price}</div>
                    
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Basket
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </main>

        {/* Shopping Cart */}
        <div className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Your Shopping Cart ({totalQuantity})</h3>
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
                      <p className="cart-item-price">Ksh {item.price}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      Ksh {item.price * item.quantity}
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
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
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
                    <button 
                      className="retry-payment-btn"
                      onClick={() => setPaymentStatus(null)}
                    >
                      Try Again
                    </button>
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
                        inputMode="numeric"
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
                      {isProcessing ? (
                        <>
                          <FaSpinner className="spinner" /> Processing...
                        </>
                      ) : (
                        `Pay Ksh ${totalAmount}`
                      )}
                    </button>
                    
                    <button 
                      type="button" 
                      className="clear-cart-btn"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </form>
                )}
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Your cart is empty</p>
              <button className="continue-shopping-btn" onClick={toggleCart}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Overlay when cart is open */}
        {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
      </div>
      <Footer />
    </>
  );
};

export default OurShop;