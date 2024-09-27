import React, { useState } from 'react';
import './OurShop.css';
import { FaSearch, FaShoppingCart, FaTrashAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";

const products = [
  {
    id: 1,
    name: 'Kenyan Taste',
    description: '340g',
    image: 'src/assets/home/product2',
    price: 1000,
  },
  {
    id: 2,
    name: 'Kenyan Taste',
    description: '340g',
    image: 'src/assets/home/product2',
    price: 2000,
  },
  {
    id: 3,
    name: 'Mayonnaise',
    description: '340g',
    image: 'src/assets/home/product2',
    price: 3000,
  },
];



const OurShop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    product.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  console.log('Filtered Products:', filteredProducts);

  return (
    <>
      <div className="our-shop-container">
        <header className="shop-header">
          <h1>Our Shop</h1>
          
          {/* Search Bar */}
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
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </header>

        {/* Product Grid (show filtered products) */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
            <p>No products found</p> // Fallback for no products found
          )}
        </div>

        {/* Cart Dropdown */}
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
                      <img src={item.image} alt={item.name} className="cart-item-img"/>
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <div className="cart-item-controls">
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                          >
                            +
                          </button>
                          <button
                            className="remove-item-btn"
                            onClick={() => removeFromCart(item)}
                          >
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
                <Link to="/Payment">
                  <button className="checkout-btn">Checkout</button>
                </Link>
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
