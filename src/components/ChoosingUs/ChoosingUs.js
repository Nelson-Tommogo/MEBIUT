import React from "react";
import styles from './ChoosingUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faThumbsUp, faSmile } from '@fortawesome/free-solid-svg-icons';

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#fff1e5' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Top three reasons to choose Mebiut Company.</p>
                <p data-aos='slide-left' className={styles.sub_text}>Experience the perfect blend of Kenyan flavors in every bite.</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faUtensils} size="3x" className={styles.icon} />
                        <p className={styles.logo_head}>Authentic Kenyan Taste</p>
                        <p className={styles.logo_text}>Our sauces capture the essence of Kenyan cuisine, providing unique flavors that resonate with local tastes.</p>
                    </div>

                    <div data-aos='fade' className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faThumbsUp} size="3x" className={styles.icon} />
                        <p className={styles.logo_head}>Quality Mayonnaise</p>
                        <p className={styles.logo_text}>Enjoy our creamy mayonnaise made with the finest ingredients, perfect for enhancing your meals.</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faSmile} size="3x" className={styles.icon} />
                        <p className={styles.logo_head}>Customer Satisfaction</p>
                        <p className={styles.logo_text}>We prioritize your experience, ensuring our products meet your expectations for quality and flavor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosingUs;
