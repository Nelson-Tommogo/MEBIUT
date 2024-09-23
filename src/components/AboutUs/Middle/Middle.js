import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';  
import logo2 from '../../../assets/aboutUs/middle2.png'; 
import logo3 from '../../../assets/aboutUs/middle3.png'; 

const Middle = () => {
    return (
        <div style={{backgroundColor: '#f8f8f8'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                {/* Main heading for the section */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Discover the Flavors of Mebiut
                </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At Mebiut, we are dedicated to bringing you the finest Kenyan sauces and mayonnaise under our **Kenyan Taste** brand. Each of our products is crafted with care and passion, using the freshest locally sourced ingredients to ensure quality and authenticity. Whether you're adding a dash of flavor to your meals or crafting a gourmet dish, Mebiut’s products bring a taste of Kenya to your table.
                </p>

                <div className="row">
                    {/* First product/service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt="Kenyan Taste Sauces"/>
                            <p className={styles.head}>Kenyan Taste Sauces</p>
                            <p className={styles.content}>
                                Our signature **Kenyan Taste Sauces** are made with authentic Kenyan spices and ingredients, giving your dishes a bold and flavorful kick.
                            </p>
                        </div>
                    </div>

                    {/* Second product/service block */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt="Kenyan Taste Mayonnaise"/>
                            <p className={styles.head}>Kenyan Taste Mayonnaise</p>
                            <p className={styles.content}>
                                Smooth, creamy, and full of flavor, our **Kenyan Taste Mayonnaise** is perfect for sandwiches, salads, and as a dip for your favorite snacks.
                            </p>
                        </div>
                    </div>

                    {/* Third product/service block */}
                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt="Order Our Products"/>
                            <p className={styles.head}>Order Our Products</p>
                            <p className={styles.content}>
                                Experience the taste of Kenya today. You can easily order our **Kenyan Taste Sauces** and **Mayonnaise** directly from us and have them delivered to your home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Middle;
