import React from "react";
import styles from './SMediaServices.module.css';
import img1 from '../../assets/sMediaService/main.png';
import img2 from '../../assets/sMediaService/middle1.png';
import img3 from '../../assets/sMediaService/bottom1.png';

const SMediaServices = () => {
    return (
        <>
            <div>
                {/* Top  */}
                <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Custom <span style={{ color: '#ff4c0a' }}>Sauce</span></p>
                            <p className={styles.headTop}>Development Services</p>
                            <p className={styles.identityTop}>Crafting Unique Flavors</p>
                            <p className={styles.content}>
                                In the world of culinary delights, having a unique sauce can set your dishes apart. Our custom sauce development service focuses on creating delicious, high-quality sauces tailored to your specific needs and local taste preferences. Whether it's a spicy peri-peri, tangy mango, or a savory barbecue sauce, we ensure every recipe embodies the essence of Kenyan cuisine.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img src={img1} alt="Custom Sauce Development" className={styles.img1} />
                    </div>
                </div>

                {/* Middle  */}
                <div className="container">
                    <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                        <div className={`col-md-6 ${styles.middleContain}`}>
                            <p className={styles.heading}>Elevate Your Culinary Offerings</p>
                            <p className={styles.text}>
                                By incorporating custom sauces into your menu, you can enhance flavors and create memorable dining experiences. Our expert team collaborates with you to design sauces that align with your brand and cater to the preferences of your customers, ensuring that your dishes not only taste amazing but also stand out in the competitive market.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} alt="Elevate Culinary Offerings" className={styles.img2} />
                        </div>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="container">
                    <div className={`row ${styles.contain}`}>
                        <div className="col-md-6">
                            <img src={img3} alt="Tailored Sauce Development" className={styles.img2} />
                        </div>
                        <div className={`col-md-6 ${styles.bottomContain}`}>
                            <p className={styles.heading1}>Tailored Solutions for Your Brand</p>
                            <p className={styles.text1}>
                                Our custom sauce development services are designed to meet the unique needs of your culinary business. From concept to creation, we work closely with you to ensure your sauces reflect your brand identity and culinary vision. Together, we can create flavors that resonate with your audience, increase customer loyalty, and drive sales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SMediaServices;
