import React, { useState } from "react";
import styles from "./ServiceHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceHome = ({ heading, content, icon }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div
                className={`${styles.box} user-select-none`}
                onClick={handleCardClick}
            >
                <FontAwesomeIcon icon={icon} size="3x" className={styles.icon} />
                <p className={styles.heading}>{heading}</p>
                <p className={styles.text}>{content}</p>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>Order Details</h2>
                        <p>{content}</p>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceHome;
