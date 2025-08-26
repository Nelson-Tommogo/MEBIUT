import React from "react";
import styles from './ChoosingUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faThumbsUp, faSmile } from '@fortawesome/free-solid-svg-icons';

const ChoosingUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>
                        Why Choose <span className={styles.highlight}>Mebiut</span>?
                    </p>
                    <p data-aos='slide-left' className={styles.sub_text}>
                        Experience the perfect blend of Kenyan flavors in every bite.
                    </p>
                </div>
                
                <div className={styles.cardsContainer}>
                    <div data-aos='fade-up' className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                        </div>
                        <h3 className={styles.logo_head}>Authentic Kenyan Taste</h3>
                        <p className={styles.logo_text}>Our sauces capture the essence of Kenyan cuisine, providing unique flavors that resonate with local tastes.</p>
                        <div className={styles.cardDecoration}></div>
                    </div>

                    <div data-aos='fade-up' data-aos-delay="100" className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
                        </div>
                        <h3 className={styles.logo_head}>Quality Mayonnaise</h3>
                        <p className={styles.logo_text}>Enjoy our creamy mayonnaise made with the finest ingredients, perfect for enhancing your meals.</p>
                        <div className={styles.cardDecoration}></div>
                    </div>

                    <div data-aos='fade-up' data-aos-delay="200" className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faSmile} className={styles.icon} />
                        </div>
                        <h3 className={styles.logo_head}>Customer Satisfaction</h3>
                        <p className={styles.logo_text}>We prioritize your experience, ensuring our products meet your expectations for quality and flavor.</p>
                        <div className={styles.cardDecoration}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosingUs;