import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignUp.module.css'; // Import CSS module
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; // FontAwesome icons

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.eyeIcon}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" className={styles.signupButton}>Sign Up</button>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={styles.googleSignup}>
        <FaGoogle className={styles.googleIcon} />
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUp;
