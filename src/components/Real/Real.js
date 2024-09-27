import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () => {
    return (
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img} />
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150" className={styles.heading}>Real</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Enhancing Customer Experiences in Kenya</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>
                            At Mebuit, we understand the unique tastes and preferences of our Kenyan customers. Our responsive web designs are crafted to reflect local culture and values, ensuring an engaging user experience. We leverage technology and analytics to create solutions that resonate with the Kenyan market, from the bustling streets of Nairobi to the coastal towns of Mombasa. Join us in transforming customer interactions through innovative design and customer-centric strategies.
                        </p>
                        <div data-aos='zoom-in' style={{ textAlign: 'left' }}>
                            <button className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;
