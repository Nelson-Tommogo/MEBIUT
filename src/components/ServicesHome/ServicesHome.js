import React from "react";
import styles from "./ServicesHome.module.css";
import ServiceHome from "../ServiceHome/ServiceHome";
import data from "./data";

const ServicesHome = () => {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p data-aos="slide-right" className={styles.superHeading}>
                        WHAT WE OFFER
                    </p>
                    <h2 data-aos="slide-right" className={styles.heading}>
                        Our Services
                    </h2>
                    <p data-aos="slide-left" className={styles.subHeading}>
                        Make Every Bite Unforgettable With Us
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {data &&
                        data.map((x) => (
                            <ServiceHome
                                key={x.id}
                                heading={x.heading}
                                content={x.content}
                                to={x.to}
                                icon={x.icon}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
export default ServicesHome;