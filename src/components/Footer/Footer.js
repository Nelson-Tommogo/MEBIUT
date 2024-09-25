import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import tiktok from '../../assets/home/tiktok.png';
import insta from '../../assets/home/insta.png';
import twitter from '../../assets/home/twitter.png';

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Mebiut</p>
                            <p className={styles.text}>
                                Mebiut is a company passionate about crafting delicious, 
                                high-quality sauces that add rich flavor to every meal.
                            </p>
                            <p className={styles.text}>
                                From traditional recipes to unique blends, we create sauces that inspire a universal taste experience.
                            </p>
                            <p className={styles.text}>
                                Enhancing meals with bold flavors, Mebiut brings the essence of Africa’s culinary heritage to your kitchen.
                            </p>
                            <div className={styles.social_logo}>
                                <a href="https://www.facebook.com/profile.php?id=61565794663374" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="fb" className={styles.img}/>
                                </a>
                                <a href="https://vm.tiktok.com/ZMhFRrvwV/" target="_blank" rel="noopener noreferrer">
                                    <img src={tiktok} alt="tiktok" className={styles.img}/>
                                </a>
                                <a href="https://www.instagram.com/p/DAI9o-iCIxV/?igsh=MWtsYnU4cWZ3czY2bA==" target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="insta" className={styles.img}/>
                                </a>
                                <a href="https://x.com/mebiutkenya?t=g49avdNlTqYEQTQQ809LAQ&s=09" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="twitter" className={styles.img}/>
                                </a>
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>mebiutkenya@gmail.com</p>
                            <p className={styles.text}>(+254) 113-792-645 </p>

                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>mebiutkenya@gmail.com</p>
                            <p className={styles.text}>(+254) 113-792-645 </p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Fri : 09:00 - 20:00</p>
                            <p className={styles.text}>Sat - Sun : 10.30 - 22:00</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
                    <p className={styles.bottom}>Copyright © 2024. All right reserved</p>
            </div>
        </>
    )
}
export default Footer;
