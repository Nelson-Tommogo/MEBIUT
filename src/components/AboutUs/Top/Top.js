import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* Main heading for the section */}
            <div className={styles.section}>
                <p data-aos='slide-right' className={styles.heading}>About Mebiut</p>
                <p data-aos='slide-left' className={styles.subHeading}>Authentic Kenyan Sauces & Mayonnaise</p>
                <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                    Welcome to Mebiut, the home of <strong>Kenyan Taste</strong>, where we bring you the finest sauces and mayonnaise inspired by authentic Kenyan flavors. Our products are crafted with locally sourced ingredients to bring a burst of flavor to your meals. Whether you're spicing up a family dinner or adding a Kenyan twist to your favorite dish, our sauces and mayonnaise are designed to deliver quality and taste that you’ll love.
                </p>
            </div>

            {/* Our Story Section */}
            <div className={styles.section}>
                <p data-aos='slide-right' className={styles.about}>Our Story</p>
                <p data-aos='slide-left' className={styles.creativity}>Crafted with Passion, Made for You</p>
                <p data-aos='fade-up' className={styles.contn}>
                    At Mebiut, our journey began with a mission to bring Kenyan flavors to the world, starting with our signature <strong>Kenyan Taste</strong> sauces and mayonnaise. We believe in using the best ingredients, sourced from local farms, to create products that add a touch of Kenyan authenticity to every meal.
                    <br /><br />
                    Whether it is our flavorful sauces or creamy mayonnaise, we pride ourselves on delivering products that resonate with both local and international customers. <strong>Kenyan Taste</strong> is more than just a brand—it’s a reflection of our dedication to bringing the heart of Kenyan cuisine into your home.
                    <br /><br />
                    Explore our range of products and experience the richness of Kenyan flavors. You can order your favorite <strong>Kenyan Taste Sauce</strong> and <strong>Mayonnaise</strong> directly from us and have them delivered right to your door.
                </p>
            </div>

            {/* Discovery Section */}
        </div>
    );
}

export default Top;
