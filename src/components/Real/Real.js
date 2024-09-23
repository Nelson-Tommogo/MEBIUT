import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150"  className={styles.heading}>Mebiut</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Transforming Customer Experiences</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>
                            At Mebiut, we leverage responsive web design and innovative technology to enhance customer experiences. 
                            Our agile development approach and robust analytics ensure that every interaction is seamless and impactful. 
                            We believe in the power of user experience to drive engagement and create lasting impressions.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;
