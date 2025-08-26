import React from "react";
import styles from "./Testimonial.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fakeData } from "./fakeData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
        },
    };

    // Render star ratings
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon 
                key={index} 
                icon={faStar} 
                className={index < rating ? styles.starFilled : styles.starEmpty} 
            />
        ));
    };

    return (
        <div className={styles.testimonialSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <p data-aos="slide-right" className={styles.superHeading}>
                        TESTIMONIALS
                    </p>
                    <h2 data-aos="slide-left" className={styles.mainHeading}>
                        What Our Customers Say
                    </h2>
                    <p data-aos="fade" className={styles.subHeading}>
                        Discover why businesses and individuals love our authentic Kenyan products
                    </p>
                </div>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    customTransition="transform 600ms ease-in-out"
                    transitionDuration={800}
                    containerClass={styles.carouselContainer}
                    arrows={true}
                    renderButtonGroupOutside={true}
                    dotListClass={styles.customDots}
                    itemClass={styles.carouselItem}
                    centerMode={false}
                    partialVisible={false}
                >
                    {fakeData.map((x) => (
                        <div className={styles.testimonialCard} key={x.id}>
                            <div className={styles.quoteIcon}>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            
                            <div className={styles.rating}>
                                {renderStars(x.rating || 5)}
                            </div>
                            
                            <p className={styles.message}>{x.message}</p>
                            
                            <div className={styles.clientInfo}>
                                <div className={styles.clientImage}>
                                    <img src={x.img} alt={x.name} />
                                </div>
                                <div className={styles.clientDetails}>
                                    <h4 className={styles.clientName}>{x.name}</h4>
                                    <p className={styles.clientProfession}>{x.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonial;