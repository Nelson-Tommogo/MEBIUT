import React from "react";
import styles from './Middle.module.css';

const Middle = () => {
    return (
        <div className={styles.middleSection}>
            <div className={styles.contentWrapper}>
                {/* Main heading for the section */}
                <div className={styles.headerSection}>
                    <h2 data-aos='fade-down' data-aos-offset="170" className={styles.mainHead}>
                        Discover the Flavors of <span className={styles.highlight}>Mebiut</span>
                    </h2>
                </div>

                <div className={styles.featuresGrid}>
                    {/* First product/service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className={styles.featureCard}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>🌶️</div>
                        </div>
                        <h3 className={styles.head}>Kenyan Taste Sauces</h3>
                        <p className={styles.content}>
                            Our signature Kenyan Taste Sauces are made with authentic Kenyan spices and ingredients, giving your dishes a bold and flavorful kick.
                        </p>
                        <div className={styles.cardDecoration}></div>
                    </div>

                    {/* Second product/service block */}
                    <div data-aos='fade-up' data-aos-offset="170" className={styles.featureCard}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>🥄</div>
                        </div>
                        <h3 className={styles.head}>Kenyan Taste Mayonnaise</h3>
                        <p className={styles.content}>
                            Smooth, creamy, and full of flavor, our Kenyan Taste Mayonnaise is perfect for sandwiches, salads, and as a dip for your favorite snacks.
                        </p>
                        <div className={styles.cardDecoration}></div>
                    </div>

                    {/* Third product/service block */}
                    <div data-aos='fade-left' data-aos-offset="170" className={styles.featureCard}>
                        <div className={styles.iconContainer}>
                            <div className={styles.icon}>🚚</div>
                        </div>
                        <h3 className={styles.head}>Order Our Products</h3>
                        <p className={styles.content}>
                            Experience the taste of Kenya today. You can easily order our Kenyan Taste Sauces and Mayonnaise directly from us and have them delivered to your home.
                        </p>
                        <div className={styles.cardDecoration}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Middle;