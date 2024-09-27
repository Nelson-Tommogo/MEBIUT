import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>Bringing Kenyas Finest Flavors to the World</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>At Mebiut, we are dedicated to creating high-quality, flavorful food products that celebrate the vibrant culinary traditions of Kenya. Our team of passionate experts brings years of experience in food innovation, crafting unique sauces and condiments like our signature Kenyan Taste sauces and mayonnaise. We blend the finest local ingredients with modern techniques to provide products that enhance every meal, making them accessible to homes across Kenya and beyond.</p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}> MEET OUR TEAM</button>
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
