import React from 'react';
import styles from './Bottom.module.css';

const Bottom = () => {
    // Data integrated directly into component
    const fakeData = [
        {
            id: 1,
            heading: 'Kenyan Taste Sauce',
            content: 'Crafted with locally sourced spices, our Kenyan Taste Sauce adds authentic flavor and the perfect balance of heat to your meals.'        },
        {
            id: 2,
            heading: 'Kenyan Taste Mayonnaise',
            content: 'Smooth, creamy, and versatile, our Kenyan Taste Mayonnaise is perfect for sandwiches, salads, and dips.'        },
        {
            id: 2,
            heading: 'Mebiut Chilly Sauce',
            content: 'Mebiut Chilly Sauce brings a bold, spicy kick to any meal. Made with fresh chilies and spices, it’s perfect for adding heat and flavor to your favorite dishes.'        },
    ];

    return (
        <div className={styles.bottomSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p className={styles.superHeading}>OUR PRODUCTS</p>
                    <h2 className={styles.mainHeading}>Authentic Kenyan Flavors</h2>
                    <p className={styles.subHeading}>
                        Discover our premium range of sauces and condiments crafted with passion and tradition
                    </p>
                </div>

                {fakeData.map((x, idx) => (
                    <div key={x.id} className={`${styles.productRow} ${idx % 2 === 0 ? styles.even : styles.odd}`}>
                        <div className={styles.productContent} data-aos={idx % 2 === 0 ? 'slide-right' : 'slide-left'} data-aos-offset="220">
                            <div className={styles.contentCard}>
                                <h3 className={styles.productHeading}>{x.heading}</h3>
                                <p className={styles.productDescription}>{x.content}</p>
                                <button className={styles.learnMoreBtn}>Learn More</button>
                            </div>
                        </div>
                        <div className={styles.productImage} data-aos={idx % 2 === 0 ? 'slide-left' : 'slide-right'}>
                            <div className={styles.imagePlaceholder}>
                                <div className={styles.iconContainer}>
                                    {idx % 2 === 0 ? (
                                        <svg className={styles.productIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg className={styles.productIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M19 10C19 17 12 21 12 21C12 21 5 17 5 10C5 7.61305 5.94821 5.32387 7.63604 3.63604C9.32387 1.94821 11.6131 1 14 1C16.3869 1 18.6761 1.94821 20.364 3.63604C22.0518 5.32387 23 7.61305 23 10V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </div>
                                <div className={styles.placeholderPattern}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bottom;