import React from "react";
import styles from './Services.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';

const Services = () => {
    return(
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p data-aos='fade-right' className={styles.subtitle}>Our Services</p>
                    <h2 data-aos='fade-left' className={styles.title}>Mebiut Premium Services</h2>
                    <p data-aos='fade-up' className={styles.description}>Discover our range of exceptional services designed to bring authentic Kenyan flavors to your doorstep</p>
                </div>

                <div className={styles.servicesGrid}>
                    {data && data.map(service => (
                        <ServiceHome 
                            key={service.id} 
                            id={service.id} 
                            heading={service.heading} 
                            content={service.content} 
                            to={service.to} 
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Services;