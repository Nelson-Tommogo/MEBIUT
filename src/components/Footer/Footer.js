import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import tiktok from '../../assets/home/tiktok.png';
import insta from '../../assets/home/insta.png';
import twitter from '../../assets/home/twitter.png';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#2b2b2b', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Mebiut</p>
                            <p className={styles.text}>
                                Mebiut is passionate about crafting high-quality sauces that add rich flavor to every meal.
                            </p>
                            <p className={styles.text}>
                                We create traditional recipes and unique blends that inspire a universal taste experience.
                            </p>
                            <p className={styles.text}>
                                For any complaints, please let us know.
                            </p>
                            <p className={styles.text} style={{ marginTop: '10px' }}>
                                <Link 
                                    to="/Complainform" 
                                    className={styles.complaintLink}
                                >
                                    Click here to fill out the form.
                                </Link>
                            </p>

                            <div className={styles.social_logo}>
                                <a href="https://www.facebook.com/profile.php?id=61565794663374" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="Facebook" className={styles.img} />
                                </a>
                                <a href="https://vm.tiktok.com/ZMhFRrvwV/" target="_blank" rel="noopener noreferrer">
                                    <img src={tiktok} alt="TikTok" className={styles.img} />
                                </a>
                                <a href="https://www.instagram.com/p/DAI9o-iCIxV/?igsh=MWtsYnU4cWZ3czY2bA==" target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="Instagram" className={styles.img} />
                                </a>
                                <a href="https://x.com/mebiutkenya?t=g49avdNlTqYEQTQQ809LAQ&s=09" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="Twitter" className={styles.img} />
                                </a>
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>info@mebiut.com</p>
                            <p className={styles.text}>(+254) 59735505</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>info@mebiut.com</p>
                            <p className={styles.text}>(+254) 113-792-645</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hours</p>
                            <p className={styles.text}>Mon - Fri : 09:00 - 20:00</p>
                            <p className={styles.text}>Sat - Sun : 10:30 - 22:00</p>
                            <p className={styles.text}>Order/Purchase : 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2024 Mebiut. All rights reserved</p>
            </div>
        </>
    );
}

export default Footer;
