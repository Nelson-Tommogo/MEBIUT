import React from "react";
import styles from "./ServicesHome.module.css";
<<<<<<< HEAD
import ServiceHome from "../ServiceHome/ServiceHome";
=======
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
import data from "./data";

const ServicesHome = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden pb-4`}>
            <p data-aos="slide-right" className={styles.heading}>
                Services
            </p>
            <div>
<<<<<<< HEAD
                <p
                    data-aos="slide-left"
                    className={`mx-auto ${styles.subHeading}`}
                >
=======
                <p data-aos="slide-left" className={`mx-auto ${styles.subHeading}`}>
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
                    Modernize your workflow and maximize result
                </p>
            </div>

            <div className="row">
                {data &&
                    data.map((x) => (
                        <div key={x.id} className="col-lg-4 col-md-6">
<<<<<<< HEAD
                            <ServiceHome
                                id={x.id}
                                heading={x.heading}
                                content={x.content}
                                to={x.to}
                                icon={x.icon}
                            />
=======
                            <div className={styles.serviceCard}>
                                <img src={x.icon} alt={x.heading} className={styles.icon} />
                                <h3 className={styles.heading}>{x.heading}</h3>
                                <p className={styles.content}>{x.content}</p>
                                <a href={x.to} className={styles.link}>Learn More</a>
                            </div>
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
                        </div>
                    ))}
            </div>
        </div>
    );
};
<<<<<<< HEAD
=======

>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
export default ServicesHome;
