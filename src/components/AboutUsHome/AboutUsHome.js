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
                    At Mebiut, we are dedicated to creating high-quality, flavorful food products that celebrate the vibrant culinary traditions of Kenya. Our team of passionate experts brings years of experience in food innovation, crafting unique sauces and condiments like our signature Kenyan Taste sauces and mayonnaise. We blend the finest local ingredients with modern techniques to provide products that enhance every meal, making them accessible to homes across Kenya and beyond.
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
