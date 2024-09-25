import React, { useState } from 'react';
import './OurShop.css'; // We will use this for the golden brown button and other styling
import { FaShoppingCart, FaTrashAlt, FaTimes } from 'react-icons/fa'; // Added FaTimes for the close icon

// Placeholder products data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the description for product 3',
    image: 'https://via.placeholder.com/150',
  },
];

const OurShop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
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

  // Remove product from cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  // Handle quantity change
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

  // Toggle cart dropdown
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="our-shop-container">
      <header className="shop-header">
        <h1>Our Shop</h1>
        <div className="cart-icon" onClick={toggleCart}>
          <FaShoppingCart size={30} />
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </header>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Basket
            </button>
          </div>
        ))}
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
            <button className="checkout-btn">Checkout</button>
          )}
        </div>
      )}
    </div>
  );
};

export default OurShop;
