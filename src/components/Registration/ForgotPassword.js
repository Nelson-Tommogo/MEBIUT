import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ForgotPassword.module.css'; // Import CSS module

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h2 className={styles.title}>Forgot Password</h2>

      <p className={styles.description}>
        Enter your email address below, and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>Send Reset Link</button>
      </form>

      <p className={styles.backLink}>
        Remembered your password? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>
    </div>
  );
};

export default ForgotPassword;
