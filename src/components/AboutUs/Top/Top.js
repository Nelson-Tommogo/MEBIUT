import React from "react";
import styles from './Top.module.css';
<<<<<<< HEAD
import img1 from '../../../assets/aboutUs/img1.png';  
import img2 from '../../../assets/aboutUs/img2.png'; 

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* Main heading for the section */}
            <p data-aos='slide-right' className={styles.heading}>About Mebiut</p>
            <p data-aos='slide-left' className={styles.subHeading}>Authentic Kenyan Sauces & Mayonnaise</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                Welcome to Mebiut, the home of <strong>Kenyan Taste</strong>, where we bring you the finest sauces and mayonnaise inspired by authentic Kenyan flavors. Our products are crafted with locally sourced ingredients to bring a burst of flavor to your meals. Whether you're spicing up a family dinner or adding a Kenyan twist to your favorite dish, our sauces and mayonnaise are designed to deliver quality and taste that you’ll love.
            </p>

            {/* Section with image and description */}
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>Our Story</p>
                    <p className={styles.creativity}>Crafted with Passion, Made for You</p>
                    <p className={styles.contn}>
                        At Mebiut, our journey began with a mission to bring Kenyan flavors to the world, starting with our signature <strong>Kenyan Taste</strong> sauces and mayonnaise. We believe in using the best ingredients, sourced from local farms, to create products that add a touch of Kenyan authenticity to every meal.
                        <br/><br/>
                        Whether it is our flavorful sauces or creamy mayonnaise, we pride ourselves on delivering products that resonate with both local and international customers. <strong>Kenyan Taste</strong> is more than just a brand—it’s a reflection of our dedication to bringing the heart of Kenyan cuisine into your home.
                        <br/><br/>
                        Explore our range of products and experience the richness of Kenyan flavors. You can order your favorite <strong>Kenyan Taste Sauce</strong> and <strong>Mayonnaise</strong> directly from us and have them delivered right to your door.
                    </p>
                </div>
                {/* Image section for sauces or products */}
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="Kenyan Taste Sauce" className={styles.img1}/>
                </div>
            </div>

            {/* Additional image or highlight */}
            <div data-aos='fade-up' className='row' style={{textAlign: 'left'}}>
                <div className={`col-md-6`}>
                    <img src={img2} alt="Kenyan Taste Mayonnaise" className={styles.img2}/>
                </div>
            </div>
        </div>
    );
}

export default Top;
=======
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About Us</p>
            <p data-aos='slide-left' className={styles.subHeading}>Web Development Service</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.creativity}>We Do with Creativity</p>
                    <p className={styles.contn}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
            </div>
            <div data-aos='fade-up' className='row' style={{textAlign:'left'}}>
                <div className={`col-md-6`}> 
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
            </div>
        </div>
    )
}

export default Top;
>>>>>>> 3b88fdcaf1e60e142cb4386658726adb48036850
