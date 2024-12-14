import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ForgotPassword.module.css'; 
import { sendPasswordResetEmail } from 'firebase/auth'; 
import { auth } from '../../firebase'; 
import Modal from 'react-modal';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Import icons

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setIsSuccessModalOpen(true);
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
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

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Password Reset Email Sent"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <FaCheckCircle className={styles.successIcon} />
          <h2>Password Reset Email Sent</h2>
          <p>An email has been sent to {email} with instructions to reset your password.</p>
          <button onClick={closeModal} className={styles.modalButton}>Close</button>
        </div>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeModal}
        contentLabel="Error Sending Email"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <FaExclamationCircle className={styles.errorIcon} />
          <h2>Error Sending Email</h2>
          <p>{errorMessage}</p>
          <button onClick={closeModal} className={styles.modalButton}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
