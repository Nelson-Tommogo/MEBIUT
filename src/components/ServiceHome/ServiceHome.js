import React from "react";
import styles from "./ServiceHome.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const ServiceHome = (props) => {
    return (
        <div className={`${styles.box} user-select-none`}>
            {/* Render FontAwesomeIcon */}
            <FontAwesomeIcon icon={props.icon} size="3x" className={styles.icon} /> 
            
            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
            
            <Link to={`/individualService?id=${props.id}`}>
                <HiOutlineArrowNarrowRight
                    className={styles.to}
                    size="2rem"
                    color="#ff4c0a"
                />
            </Link>
        </div>
    );
};

export default ServiceHome;
