import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
<<<<<<< HEAD
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
=======
import tiktok from '../../assets/home/tiktok.png';
import insta from '../../assets/home/insta.png';
import twitter from '../../assets/home/twitter.png';
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
<<<<<<< HEAD
                            <p className={styles.logo}>Miritus</p>
                            <p className={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            <p className={styles.text}>Lorem ipsum dolor sit amet</p>
                            <p className={styles.text}>Lorem ipsum dolor sit amet</p>
                            <div className={styles.social_logo}>
                                <img src={fb} alt="fb" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/>
=======
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
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
<<<<<<< HEAD
                            <p className={styles.text}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className={styles.text}>deanna.curtis@example.com</p>
                            <p className={styles.text}>(671) 555-0110</p>
=======
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>mebiutkenya@gmail.com</p>
                            <p className={styles.text}>(+254) 113-792-645 </p>
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850

                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
<<<<<<< HEAD
                            <p className={styles.text}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className={styles.text}>deanna.curtis@example.com</p>
                            <p className={styles.text}>(671) 555-0110</p>
=======
                            <p className={styles.text}>00618 Ruaraka Nairobi, Kenya</p>
                            <p className={styles.text}>mebiutkenya@gmail.com</p>
                            <p className={styles.text}>(+254) 113-792-645 </p>
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sun : Closed</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
<<<<<<< HEAD
                    <p className={styles.bottom}>Copyright © 2020. All right reserved</p>
=======
                    <p className={styles.bottom}>Copyright © 2024. All right reserved</p>
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
            </div>
        </>
    )
}
<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
