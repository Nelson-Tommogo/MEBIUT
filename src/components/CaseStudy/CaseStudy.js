import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';
import fakeData from './fakeData';

const CaseStudy = () => {
    const [data, setData] = useState(fakeData);
    const [active, setActive] = useState([true, false, false]);

    // Filter data based on the new categories
    const filterData = (category) => {
        if (category === 'all') {
            setData(fakeData); // Show all data
        } else {
            let temp = fakeData.filter((x) => x.category === category);
            setData([...temp]);
        }
    }

    // Function to handle active state for buttons
    const activeNav = (i) => {
        let temp = [false, false, false];
        temp[i] = true;
        setActive([...temp]);
    }

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <p className={styles.head} data-aos='slide-right'>OUR PRODUCTS</p>
            <div data-aos='slide-left'>
                <p className={styles.our}>EXPLORE&nbsp;</p>
                <p className={styles.study}>OUR RANGE</p>
            </div>

            {/* Updated category buttons */}
            <div className={`${styles.grp_btn}`} data-aos='fade'>
                <p onClick={() => { setData(fakeData); activeNav(0); }} className={`${styles.filter} ${active[0] ? styles.active : null}`}>ALL</p>
                <p onClick={() => { filterData('kenyan taste'); activeNav(1); }} className={`${styles.filter} ${active[1] ? styles.active : null}`}>KENYAN TASTE</p>
                <p onClick={() => { filterData('mayonnaise'); activeNav(2); }} className={`${styles.filter} ${active[2] ? styles.active : null}`}>MAYONNAISE</p>
            </div>

            {/* Updated layout to show images with titles */}
            <div className='row mb-2'>
                {
                    data.map((x) => (
                        <div key={x.id} className={`col-md-4 col-sm-6 mt-4`} data-aos='fade'>
                            <Link to="/OurShop" style={{ textDecoration: "none" }}>
                                <div className={styles.img} style={{ backgroundImage: `url(${x.img})` }}>
                                    {/* Display only title below the image */}
                                    <p className={styles.imgTitle}>{x.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CaseStudy;
