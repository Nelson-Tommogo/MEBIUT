import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faBoxes, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Real.module.css';

const Real = () => {
    const counters = [
        { icon: faUsers, label: "Customers Served", value: "50,000+", suffix: "+" },
        { icon: faGlobe, label: "Countries Reached", value: "3", suffix: "" },
        { icon: faMapMarkerAlt, label: "Counties Covered(Kenya)", value: "46", suffix: "" },
        { icon: faBoxes, label: "Products Available", value: "20", suffix: "K+" },
    ];

    return (
        <div className={styles.impactSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p className={styles.superHeading}>OUR IMPACT</p>
                    <h2 className={styles.mainHeading}>Enhancing Customer Experiences Across Kenya</h2>
                    <p className={styles.subHeading}>
                        For over two decades, we've been bringing authentic Kenyan flavors to homes and businesses nationwide
                    </p>
                </div>
                
                <div className={styles.countersGrid}>
                    {counters.map((counter, index) => (
                        <div key={index} className={styles.counterCard} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={styles.iconContainer}>
                                <FontAwesomeIcon icon={counter.icon} className={styles.icon} />
                            </div>
                            <div className={styles.counterContent}>
                                <div className={styles.counterValue}>
                                    {counter.value}<span className={styles.counterSuffix}>{counter.suffix}</span>
                                </div>
                                <p className={styles.counterLabel}>{counter.label}</p>
                            </div>
                            <div className={styles.counterHoverEffect}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Real;