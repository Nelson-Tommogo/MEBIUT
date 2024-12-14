import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Complaint Form', 
        pdfUrl: '' 
    },
    { 
        name: 'Terms and Conditions', 
        pdfUrl: '' 
    },
];

const Footer = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (index) => {
        setOpenService(openService === index ? null : index);
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <p className={styles.newsletterText}>
                        Subscribe to our newsletter to get <br />
                        updates and recommendations.
                    </p>
                    <div className={styles.newsletterInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                        />
                        <button
                            className={styles.subscribeButton}
                            onClick={() => (window.location.href = "mailto:info@mebiut.com")}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{ backgroundColor: '#000', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Mebiut Limited</p>
                            <p className={styles.text}>Mebiut specializes in sauces.</p>
                            <p className={styles.text}>Make every bite unforgettable.</p>
                        </div>

                        {/* Column 2 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Useful Links</p>
                            {servicesData.map((service, index) => (
                                <div key={index}>
                                    <div className={styles.text} onClick={() => toggleService(index)}>
                                        {service.name}
                                        <FiChevronDown style={{ marginLeft: '8px', cursor: 'pointer' }} />
                                    </div>
                                    {openService === index && (
                                        <div className={styles.text} style={{ cursor: 'pointer' }}>
                                            <a href={service.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                View {service.name}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Kenyan Taste</p>
                            <p className={styles.text}>Mayonnaise</p>
                            <p className={styles.text}>Sauce Development</p>
                            <p className={styles.text}>Ketchup</p>
                        </div>

                        {/* Column 4 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Follow Our Socials</p>
                            <p className={styles.text}>
                                <a href="https://facebook.com/mebiut" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className={styles.icon} />
                                </a>
                                Facebook
                            </p>
                            <p className={styles.text}>
                                <a href="https://tiktok.com/@mebiut" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className={styles.icon} />
                                </a>
                                TikTok
                            </p>
                            <p className={styles.text}>
                                <a href="https://instagram.com/mebiut" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className={styles.icon} />
                                </a>
                                Instagram
                            </p>
                            <p className={styles.text}>
                                <a href="https://twitter.com/mebiut" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className={styles.icon} />
                                </a>
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div style={{ backgroundColor: '#6c4d38', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2024 Mebiut. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
