import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert("Thank you for your message! We'll get back to you soon.");
        setFormContent({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className={styles.container}>
            <div className={styles.contactContainer}>
                <div className={styles.headerSection}>
                    <h2 data-aos='fade-up' className={styles.heading}>We'd Love to Hear From You</h2>
                    <p data-aos='fade-up' data-aos-delay="100" className={styles.subheading}>
                        Get in touch with us - we're here to help with any questions about our products.
                    </p>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.infoCard} data-aos='fade-right'>
                        <div className={styles.icon}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3 className={styles.infoTitle}>Address</h3>
                        <p className={styles.infoContent}>P.O BOX 00618 Ruaraka, Nairobi, Kenya</p>
                    </div>

                    <div className={styles.infoCard} data-aos='fade-up' data-aos-delay="100">
                        <div className={styles.icon}>
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h3 className={styles.infoTitle}>Contact</h3>
                        <p className={styles.infoContent}>Mobile: +254 113 792 645</p>
                        <p className={styles.infoContent}>Phone: +254 759 735 505</p>
                        <p className={styles.infoContent}>Email: info@mebiut.com</p>
                    </div>

                    <div className={styles.infoCard} data-aos='fade-left' data-aos-delay="200">
                        <div className={styles.icon}>
                            <i className="far fa-clock"></i>
                        </div>
                        <h3 className={styles.infoTitle}>Business Hours</h3>
                        <p className={styles.infoContent}>Mon - Fri: 09:00 - 20:00</p>
                        <p className={styles.infoContent}>Sat & Sun: 10:30 - 22:00</p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h3 data-aos='fade-up' className={styles.formTitle}>Send us a message</h3>
                    
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup} data-aos='fade-right'>
                                <label className={styles.label}>Your Name</label>
                                <input 
                                    name="name" 
                                    value={formContent.name} 
                                    onChange={handleChange} 
                                    className={styles.input} 
                                    type="text" 
                                    required 
                                />
                            </div>

                            <div className={styles.formGroup} data-aos='fade-left'>
                                <label className={styles.label}>Email Address</label>
                                <input 
                                    name="email" 
                                    value={formContent.email} 
                                    onChange={handleChange} 
                                    className={styles.input} 
                                    type="email" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup} data-aos='fade-up'>
                            <label className={styles.label}>Subject</label>
                            <input 
                                name="subject" 
                                value={formContent.subject} 
                                onChange={handleChange} 
                                className={styles.input} 
                                type="text" 
                                required 
                            />
                        </div>

                        <div className={styles.formGroup} data-aos='fade-up'>
                            <label className={styles.label}>Your Message</label>
                            <textarea 
                                name="message" 
                                value={formContent.message} 
                                onChange={handleChange} 
                                className={`${styles.input} ${styles.textarea}`} 
                                required
                                rows="5"
                            ></textarea>
                        </div>

                        <div data-aos='fade-up' className={styles.submitContainer}>
                            <button type="submit" className={styles.submitButton}>
                                Send Message
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;