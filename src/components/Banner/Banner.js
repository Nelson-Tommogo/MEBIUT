import React from "react";
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>Discover the Authentic Flavors of Kenya</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>ORDER NOW</button>
            </div>
        </div>
    </>
  );
};

export default Banner;
