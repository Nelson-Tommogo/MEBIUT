import React, { useState } from "react";
import styles from "./ServiceHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceHome = ({ heading, content, icon }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleCardClick = () => {
        setModalOpen(true);
        // Reset form state when modal opens
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
        });
    };

    const closeModal = (e) => {
        if (e) e.stopPropagation();
        setModalOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds and close modal after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
            
            setTimeout(() => {
                setModalOpen(false);
            }, 5000);
        }, 2000);
    };

    return (
        <>
            <div
                className={styles.serviceCard}
                onClick={handleCardClick}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${heading}`}
            >
                <div className={styles.cardContent}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} className={styles.icon} />
                    </div>
                    <h3 className={styles.cardHeading}>{heading}</h3>
                    <p className={styles.cardText}>{content}</p>
                    <div className={styles.cardHoverIndicator}>
                        <span>Learn more</span>
                        <span className={styles.arrow}>→</span>
                    </div>
                </div>
                <div className={styles.cardHoverEffect}></div>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={handleModalClick}>
                        <button 
                            className={styles.closeButton}
                            onClick={closeModal}
                            aria-label="Close modal"
                            disabled={isSubmitting}
                        >
                            &times;
                        </button>
                        
                        {!isSubmitted ? (
                            <>
                                <div className={styles.modalIconContainer}>
                                    <FontAwesomeIcon icon={icon} className={styles.modalIcon} />
                                </div>
                                <h2 className={styles.modalHeading}>{heading}</h2>
                                <p className={styles.modalContent}>{content}</p>
                                
                                <div className={styles.formContainer}>
                                    <h3>Request This Service</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="name">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    placeholder="Enter your name" 
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required 
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email">Email Address *</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    placeholder="Enter your email" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required 
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone">Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    id="phone" 
                                                    placeholder="Enter your phone number" 
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="company">Company Name</label>
                                                <input 
                                                    type="text" 
                                                    id="company" 
                                                    placeholder="Enter company name (if applicable)" 
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">Message *</label>
                                            <textarea 
                                                id="message" 
                                                rows="4" 
                                                placeholder="Tell us about your requirements"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required 
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className={styles.submitButton}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <div className={styles.submittingContainer}>
                                                    <div className={styles.loadingSpinner}></div>
                                                    <span>Sending...</span>
                                                </div>
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className={styles.successContainer}>
                                <div className={styles.successAnimation}>
                                    <div className={styles.successCheckmark}>
                                        <div className={styles.checkIcon}>
                                            <span className={styles.iconLine + ' ' + styles.lineTip}></span>
                                            <span className={styles.iconLine + ' ' + styles.lineLong}></span>
                                            <div className={styles.iconCircle}></div>
                                            <div className={styles.iconFix}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className={styles.successHeading}>Request Submitted!</h2>
                                <p className={styles.successMessage}>
                                    Thank you for your interest. We've received your request and will respond shortly.
                                </p>
                                <p className={styles.successNote}>
                                    This window will close automatically in a few seconds.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceHome;