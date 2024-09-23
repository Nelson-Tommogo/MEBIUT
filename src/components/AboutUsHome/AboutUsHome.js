import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';
import { Link } from 'react-router-dom';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>Mebiut has a skilled team dedicated to crafting exceptional sauces.</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>Mebiut's highly specialized management team boasts over 20 years of 
                                combined experience in the food industry, with a proven ability to blend traditional expertise 
                                with innovative digital solutions. We excel in crafting tailored market strategies that meet 
                                evolving consumer needs, whether through consulting, product development, or exceptional service delivery.
                            </p>
                        </div>
                        <div data-aos='zoom-in' style={{ textAlign: 'left' }}>
                            <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                                <button
                                    className={`btn custom_btn ${styles.btn}`}
                                    style={{ backgroundColor: '#6C4D38', color: '#fff' }}
                                    >
                                    MEET OUR TEAM
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt=""/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{width:'110%'}} alt=""/>
                                <img data-aos="zoom-in-left" src={img3} alt=""/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;
