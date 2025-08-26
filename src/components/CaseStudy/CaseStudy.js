import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';
import fakeData from './casestudydata';

const CaseStudy = () => {
    const [data, setData] = useState(fakeData);
    const [active, setActive] = useState([true, false, false]);

    // Filter data based on the new categories
    const filterData = (category, index) => {
        if (category === 'all') {
            setData(fakeData); // Show all data
        } else {
            let temp = fakeData.filter((x) => x.category === category);
            setData([...temp]);
        }
        activeNav(index);
    }

    // Function to handle active state for buttons
    const activeNav = (i) => {
        let temp = [false, false, false];
        temp[i] = true;
        setActive([...temp]);
    }

    return (
        <div className={styles.caseStudyContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p className={styles.superHeading} data-aos='slide-right'>OUR PRODUCTS</p>
                    <h2 className={styles.mainHeading} data-aos='slide-left'>
                        <span className={styles.explore}>EXPLORE</span>
                        <span className={styles.ourRange}> OUR RANGE</span>
                    </h2>
                    <p className={styles.subHeading} data-aos='fade'>
                        Discover our premium selection of authentic Kenyan sauces and condiments
                    </p>
                </div>

                {/* Updated category buttons */}
                <div className={styles.filterButtons} data-aos='fade'>
                    <button 
                        onClick={() => filterData('all', 0)} 
                        className={`${styles.filterBtn} ${active[0] ? styles.active : ''}`}
                    >
                        ALL PRODUCTS
                    </button>
                    <button 
                        onClick={() => filterData('kenyan taste', 1)} 
                        className={`${styles.filterBtn} ${active[1] ? styles.active : ''}`}
                    >
                        KENYAN TASTE
                    </button>
                    <button 
                        onClick={() => filterData('mayonnaise', 2)} 
                        className={`${styles.filterBtn} ${active[2] ? styles.active : ''}`}
                    >
                        MAYONNAISE
                    </button>
                    <button 
                        onClick={() => filterData('chilly sauce', 3)} 
                        className={`${styles.filterBtn} ${active[3] ? styles.active : ''}`}
                    >
                        Chilly Sauce
                    </button>
                </div>

                {/* Product grid */}
                <div className={styles.productsGrid}>
                    {data.map((x) => (
                        <div key={x.id} className={styles.productCard} data-aos='fade-up'>
                            <Link to="/OurShop" className={styles.productLink}>
                                <div 
                                    className={styles.productImage} 
                                    style={{ backgroundImage: `url(${x.img})` }}
                                >
                                    <div className={styles.imageOverlay}></div>
                                    <div className={styles.productInfo}>
                                        <h3 className={styles.productTitle}>{x.title}</h3>
                                        <p className={styles.productCategory}>{x.category}</p>
                                        <div className={styles.viewProduct}>
                                            View Product
                                            <span className={styles.arrowIcon}>→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className={styles.noProducts} data-aos='fade'>
                        <p>No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CaseStudy;