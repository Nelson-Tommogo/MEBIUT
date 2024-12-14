import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faClock, faBoxes } from '@fortawesome/free-solid-svg-icons';
import styles from './Real.module.css';

const Real = () => {
    const counters = [
        { icon: faUsers, label: "Customers Served", value: "100,000+" },
        { icon: faGlobe, label: "Country", value: "Kenya" },
        { icon: faGlobe, label: "Counties Reached", value: "46" },
        { icon: faClock, label: "Years of Experience", value: "25+" },
        { icon: faBoxes, label: "Products Available", value: "200,000+" },
    ];

    return (
        <div className={styles.parentContainer}>
            <div className={styles.textContainer}>
                <p className={styles.heading}>OUR IMPACT</p>
                <p className={styles.subHeading}>Enhancing Customer Experiences Globally</p>
            </div>
            <div className={styles.countersContainer}>
                <div className={styles.counters}>
                    {counters.map((counter, index) => (
                        <div key={index} className={styles.counter}>
                            <FontAwesomeIcon icon={counter.icon} size="3x" className={styles.icon} />
                            <p className={styles.counterValue}>{counter.value}</p>
                            <p className={styles.counterLabel}>{counter.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Real;
