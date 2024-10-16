import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.css';

const images = [
  { src: require('../../assets/4.jpg'), alt: "Image 1", text: "Discover the Authentic Flavors of Kenya", buttonLabel: "ORDER NOW", buttonLink: "/OurShop" },
  { src: require('../../assets/om.jpeg'), alt: "Image 2", text: "Experience Traditional Kenyan Cuisine", buttonLabel: "EXPLORE MENU", buttonLink: "/services" },
  { src: require('../../assets/om0.jpeg'), alt: "Image 3", text: "Savor Every Bite with Our Fresh Ingredients", buttonLabel: "SEE SPECIALS", buttonLink: "" },
  { src: require('../../assets/home2.jpg'), alt: "Image 4", text: "Join Us for an Unforgettable Meal", buttonLabel: "MAKE RESERVATION", buttonLink: "/contactUs" },
  { src: require('../../assets/6.jpg'), alt: "Image 5", text: "Taste the Rich Heritage of Kenyan Dishes", buttonLabel: "VIEW GALLERY", buttonLink: "" },
];

const PreviousArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
  </div>
);

const Banner = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (link) => {
    navigate(link);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    beforeChange: (_current, next) => setCurrentSlide(next),
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />
  };
  

  return (
    <>
      <div className={styles.imgbox}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className={styles.slideImage} />
            </div>
          ))}
        </Slider>
        <div className={`${styles.center}`}>
          <p data-aos='fade-down' className={styles.text}>{images[currentSlide].text}</p>
          <button
            data-aos='fade-up'
            className={`btn custom_btn ${styles.btn}`}
            onClick={() => handleButtonClick(images[currentSlide].buttonLink)}
          >
            {images[currentSlide].buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
