import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Complaint Form', 
        pdfUrl: 'https://docs.google.com/forms/d/1YX5Hb75nYQ-gR69LI0IYUr296ofgJdq2G4rlSxRPreg/edit?ts=675e7504' 
    },
    { 
        name: 'Kenyan Taste Website', 
        pdfUrl: 'kenyantaste.mebiut.com ' 
    },
    { 
        name: 'Mebiuts Mayonnaise Website', 
        pdfUrl: 'mayonnaise.mebiut.com' 
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
                            <p className={styles.head}>Our Top Services</p>
                            <p className={styles.text}>Kenyan Taste Development and Supply</p>
                            <p className={styles.text}>Mabiut Mayonnaise</p>
                            <p className={styles.text}>Custom Recipe Development</p>
                        </div>

                        {/* Column 4 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Follow Our Socials</p>
                            <p className={styles.text}>
                                <a href="https://web.facebook.com/profile.php?id=61565794663374" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className={styles.icon} />
                                </a>
                                Facebook
                            </p>
                            <p className={styles.text}>
                                <a href="https://www.tiktok.com/@mebiut2024" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className={styles.icon} />
                                </a>
                                TikTok
                            </p>
                            <p className={styles.text}>
                                <a href="https://www.instagram.com/mebiutkenya/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className={styles.icon} />
                                </a>
                                Instagram
                            </p>
                            <p className={styles.text}>
                                <a href="https://x.com/mebiutkenya" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className={styles.icon} />
                                </a>
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
{/* Embedded Map Section */}
<div style={{ marginTop: '20px', textAlign: 'center' }}>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9126110649536!2d36.88994177490444!3d-1.220853898767499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f157248b209f7%3A0xe84ad13d462cc81b!2sMebiut!5e0!3m2!1sen!2ske!4v1736264721534!5m2!1sen!2ske" 
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        title="Location Map of Mebiut"
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

            {/* Copyright Section */}
            <div style={{ backgroundColor: '#6c4d38', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2024 Mebiut. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
