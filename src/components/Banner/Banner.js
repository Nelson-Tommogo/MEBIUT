import React from "react";
import { useNavigate } from 'react-router-dom'; 
import styles from './Banner.module.css';

const Banner = () => {
  const navigate = useNavigate(); 

  const handleOrderNowClick = () => {
    navigate('/OurShop'); 
  };

  return (
    <>
      <div className={styles.imgbox}>
        <div className={`${styles.center} overflow-hidden`}>
          <p data-aos='fade-down' className={styles.text}>Discover the Authentic Flavors of Kenya</p>
          <button
            data-aos='fade-up'
            className={`btn custom_btn ${styles.btn}`}
            onClick={handleOrderNowClick} // Add onClick handler
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
