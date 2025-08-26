import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Top.module.css";

const Top = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/Ourshop");
  };

  return (
    <div className={styles.container}>
      {/* Our Story Section */}
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <p data-aos="fade-right" className={styles.about}>
            Our Story
          </p>
          <p data-aos="fade-left" className={styles.creativity}>
            Crafted with Passion, Made for You
          </p>
          <p data-aos="fade-up" className={styles.contn}>
            Mebiut began with a mission to share authentic Kenyan flavors worldwide. 
            We source ingredients from local farms to create products that bring 
            Kenyan authenticity to every meal. Our sauces and mayonnaise reflect 
            our dedication to quality and taste that resonates with both local and 
            international customers.
          </p>
          <div data-aos="zoom-in" className={styles.ctaContainer}>
            <p className={styles.ctaText}>Experience authentic Kenyan flavors today</p>
            <button className={styles.ctaButton} onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;