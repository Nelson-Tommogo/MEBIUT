import React from "react";
import styles from "./ServicesHome.module.css";
import data from "./data";

const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            <p data-aos="slide-right" className={styles.heading}>
                Services
            </p>
            <div>
                <p data-aos="slide-left" className={`mx-auto ${styles.subHeading}`}>
                    Modernize your workflow and maximize result
                </p>
            </div>

            <div className="row">
                {data &&
                    data.map((x) => (
                        <div key={x.id} className="col-lg-4 col-md-6">
                            <div className={styles.serviceCard}>
                                <img src={x.icon} alt={x.heading} className={styles.icon} />
                                <h3 className={styles.heading}>{x.heading}</h3>
                                <p className={styles.content}>{x.content}</p>
                                <a href={x.to} className={styles.link}>Learn More</a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ServicesHome;
