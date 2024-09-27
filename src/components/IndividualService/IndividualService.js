import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import data from './data';
import timer from '../../assets/individualService/timer.png';
import lock from '../../assets/individualService/tren.png';
import det from '../../assets/individualService/det.png';

const IndividualService = () => {
    const { search } = useLocation();
    const navigate = useNavigate();  // Change here
    const id = parseInt(new URLSearchParams(search).get('id'), 10);
    const service = data.find(x => x.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect or show an error if the service is not found
    if (!service) {
        // Optionally redirect to a "not found" page
        navigate('/not-found'); // Change this line to redirect to a not found page
        return <div className="container">Service not found.</div>;
    }

    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='slide-right' className={styles.heading}>{service.heading}</p>
                <p data-aos='slide-left' className={styles.heading_content}>{service.content}</p>
            
                <div className="row">
                    <div className="col-md-4" data-aos='fade-right' data-aos-offset="150">
                        <img src={timer} alt="Speed Optimization" className={styles.img}/>
                        <p className={styles.logo_head}>Flavor Innovation</p>
                        <p className={styles.heading_content}>Crafting unique flavors that elevate every dish, making your meals unforgettable.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade' data-aos-offset="150">
                        <img src={det} alt="Marketing Strategy" className={styles.img} />
                        <p className={styles.logo_head}>Custom Recipes</p>
                        <p className={styles.heading_content}>Our team specializes in developing tailored sauces to fit your culinary vision.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset="150">
                        <img src={lock} alt="Experts Worker" className={styles.img}/>
                        <p className={styles.logo_head}>Quality Assurance</p>
                        <p className={styles.heading_content}>We ensure every bottle meets the highest standards of quality and flavor.</p>
                    </div>
                </div>

                {service.contents.map((x, idx) => (
                    idx % 2 === 0 ? 
                    <div key={idx} className="row" style={{marginTop: '112px'}}>
                        <div data-aos='slide-right' data-aos-offset="150" className="col-md-6">
                            <img src={x.icon} alt={x.heading} className={styles.contentImg}/>
                        </div>
                        <div data-aos='slide-left' data-aos-offset="150" className="col-md-6">
                            <p className={`${styles.heading} ${styles.subHead}`}>{x.heading}</p>
                            <p className={`${styles.heading_content} ${styles.justify}`}>{x.content}</p>
                        </div>
                    </div>
                    :
                    <div key={idx} className="row" style={{marginTop: '112px'}}>
                        <div className="col-md-6" data-aos='slide-right' data-aos-offset="150">
                            <p className={`${styles.heading} ${styles.subHead}`}>{x.heading}</p>
                            <p className={`${styles.heading_content} ${styles.justify}`}>{x.content}</p>
                        </div>
                        <div className="col-md-6" data-aos='slide-left' data-aos-offset="150">
                            <img src={x.icon} alt={x.heading} className={styles.contentImg}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default IndividualService;
