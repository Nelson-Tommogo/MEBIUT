import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
<<<<<<< HEAD
                        <p data-aos="slide-left" className={styles.heading}>Bringing Kenya’s Finest Flavors to the World</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>At **Mebiut**, we are dedicated to creating high-quality, flavorful food products that celebrate the vibrant culinary traditions of Kenya. Our team of passionate experts brings years of experience in food innovation, crafting unique sauces and condiments like our signature **Kenyan Taste sauces** and **mayonnaise**. We blend the finest local ingredients with modern techniques to provide products that enhance every meal, making them accessible to homes across Kenya and beyond.</p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}> MEET OUR TEAM</button>
                        </div>
                        
=======
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

>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
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
