import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUsHome.module.css";

const AboutUsHome = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/team"); // Navigate to the team page
    };

    return (
        <div className={`${styles.aboutContainer}`}>
            <div className={styles.textBox}>
                <p className={styles.head}>ABOUT US</p>
                <h1 className={styles.heading}>Bringing Kenya's Finest Flavors to the World</h1>
                <p className={styles.content}>
                    At Mebiut, we are dedicated to creating high-quality, flavorful food products that celebrate the vibrant culinary traditions of Kenya. Our passion for authentic taste drives us to craft exceptional sauces and condiments that elevate everyday meals.
                </p>
                
                <div className={styles.products}>
                    <h2 className={styles.productsTitle}>Our Signature Products</h2>
                    <ul className={styles.productsList}>
                        <li>Kenyan Taste Sauces - A perfect blend of traditional spices</li>
                        <li>Premium Mayonnaise - Creamy, rich, and versatile</li>
                        <li>Zesty Chilly Sauce - The perfect balance of heat and flavor</li>
                        <li>Specialty Condiments - Unique tastes for discerning palates</li>
                    </ul>
                </div>
                
                <p className={styles.content}>
                    We blend the finest local ingredients with modern techniques to provide products that enhance every meal, making them accessible to homes across Kenya and beyond.
                </p>
                
                <p className={styles.teamIntro}>
                    Behind these delicious products is a team of passionate food experts dedicated to quality and innovation.
                </p>
                
                <div className={styles.buttonContainer}>
                    <button 
                        className={`btn ${styles.button}`} 
                        onClick={handleButtonClick}
                    >
                        MEET OUR TEAM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;