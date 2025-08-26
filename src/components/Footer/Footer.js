import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Complaint Form', 
        pdfUrl: 'https://docs.google.com/forms/d/1YX5Hb75nYQ-gR69LI0IYUr296ofgJdq2G4rlSxRPreg/edit?ts=675e7504' 
    },
    { 
        name: 'Kenyan Taste Website', 
        pdfUrl: 'https://kenyantaste.mebiut.com' 
    },
    { 
        name: 'Mebiuts Mayonnaise Website', 
        pdfUrl: 'https://mayonnaise.mebiut.com' 
    },
];

const Footer = () => {
    const [openService, setOpenService] = useState(null);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const toggleService = (index) => {
        setOpenService(openService === index ? null : index);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            // Here you would typically send the email to your backend
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <h3 className={styles.newsletterTitle}>Stay Updated with Mebiut</h3>
                    <p className={styles.newsletterText}>
                        Subscribe to our newsletter for exclusive updates, recipes, and special offers
                    </p>
                    {subscribed ? (
                        <div className={styles.successMessage}>
                            <span>🎉</span> Thank you for subscribing!
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                            <div className={styles.inputContainer}>
                                <FaEnvelope className={styles.inputIcon} />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className={styles.newsletterInput}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.subscribeButton}>
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Main Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    {/* Company Info */}
                    <div className={styles.footerColumn}>
                        <div className={styles.logoContainer}>
                            <h3 className={styles.logo}>Mebiut</h3>
                            <div className={styles.logoSubtitle}>Authentic Kenyan Flavors</div>
                        </div>
                        <p className={styles.companyDescription}>
                            Mebiut specializes in creating authentic Kenyan sauces and mayonnaise that make every bite unforgettable.
                        </p>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>P.O BOX 00618 Ruaraka, Nairobi</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <span>+254 113 792 645</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <span>info@mebiut.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {servicesData.map((service, index) => (
                                <li key={index} className={styles.linkItem}>
                                    <div 
                                        className={styles.serviceHeader} 
                                        onClick={() => toggleService(index)}
                                    >
                                        <span>{service.name}</span>
                                        {openService === index ? (
                                            <FiChevronUp className={styles.chevron} />
                                        ) : (
                                            <FiChevronDown className={styles.chevron} />
                                        )}
                                    </div>
                                    {openService === index && (
                                        <div className={styles.serviceDropdown}>
                                            <a 
                                                href={service.pdfUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={styles.serviceLink}
                                            >
                                                View {service.name}
                                            </a>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Our Services</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>Kenyan Taste Development</li>
                            <li className={styles.linkItem}>Mebiut Mayonnaise</li>
                            <li className={styles.linkItem}>Custom Recipe Development</li>
                            <li className={styles.linkItem}>Bulk Orders</li>
                            <li className={styles.linkItem}>Recipe Workshops</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className={styles.footerColumn}>
                        <h4 className={styles.columnTitle}>Follow Us</h4>
                        <p className={styles.socialText}>Stay connected with us on social media</p>
                        <div className={styles.socialIcons}>
                            <a 
                                href="https://web.facebook.com/profile.php?id=61565794663374" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Facebook"
                            >
                                <FaFacebook className={styles.socialIcon} />
                            </a>
                            <a 
                                href="https://www.tiktok.com/@mebiut2024" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="TikTok"
                            >
                                <FaTiktok className={styles.socialIcon} />
                            </a>
                            <a 
                                href="https://www.instagram.com/mebiutkenya/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                <FaInstagram className={styles.socialIcon} />
                            </a>
                            <a 
                                href="https://x.com/mebiutkenya" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Twitter"
                            >
                                <FaTwitter className={styles.socialIcon} />
                            </a>
                        </div>
                        
                        <div className={styles.businessHours}>
                            <h5 className={styles.hoursTitle}>Business Hours</h5>
                            <p className={styles.hoursText}>Mon - Fri: 9:00 AM - 8:00 PM</p>
                            <p className={styles.hoursText}>Sat - Sun: 10:30 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className={styles.mapContainer}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9126110649536!2d36.88994177490444!3d-1.220853898767499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f157248b209f7%3A0xe84ad13d462cc81b!2sMebiut!5e0!3m2!1sen!2ske!4v1736264721534!5m2!1sen!2ske" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        title="Location Map of Mebiut"
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.map}
                    ></iframe>
                </div>

                {/* Copyright Section */}
                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Mebiut Limited. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;