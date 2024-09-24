import React from "react";
import styles from './Banner.module.css';
<<<<<<< HEAD

const Banner = () => {
=======
import { Link } from 'react-router-dom';

const Banner = () => {

>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
<<<<<<< HEAD
                <p data-aos='fade-down' className={styles.text}>Discover the Authentic Flavors of Kenya</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>ORDER NOW</button>
            </div>
        </div>
=======
                <p data-aos='fade-down' className={styles.text}>Passionate about bringing Africa's taste to the world.
                </p>
                <Link to="/services">
                  <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>
                    DISCOVER&apos; MORE
                  </button>
                </Link>

            </div>
            
        </div>
        
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
    </>
  );
};

export default Banner;
