import React from "react";
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>Passionate about bringing Africa's taste to the world.
                </p>
                <Link to="/services">
                  <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>
                    DISCOVER&apos; MORE
                  </button>
                </Link>

            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
