import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";

const images = [
  {
    src: require("../../assets/4.jpg"),
    alt: "Image 1",
    text: "Discover the Authentic Flavors of Kenya",
    subtext: "Experience the rich taste of traditional Kenyan sauces and mayonnaise",
    buttonLabel: "ORDER NOW",
    buttonLink: "/OurShop",
  },
  {
    src: require("../../assets/om.jpeg"),
    alt: "Image 2",
    text: "Experience Traditional Kenyan Cuisine",
    subtext: "Bring the authentic taste of Kenya to your table",
    buttonLabel: "EXPLORE MENU",
    buttonLink: "/services",
  },
  {
    src: require("../../assets/om0.jpeg"),
    alt: "Image 3",
    text: "Savor Every Bite with Our Fresh Ingredients",
    subtext: "Made with locally sourced, premium ingredients",
    buttonLabel: "SEE SPECIALS",
    buttonLink: "",
  },
  {
    src: require("../../assets/home2.jpg"),
    alt: "Image 4",
    text: "Join Us for an Unforgettable Meal",
    subtext: "Create memorable moments with our authentic flavors",
    buttonLabel: "MEET OUR TEAM",
    buttonLink: "/team",
  },
  {
    src: require("../../assets/6.jpg"),
    alt: "Image 5",
    text: "Taste the Rich Heritage of Kenyan Dishes",
    subtext: "Traditional recipes with a modern twist",
    buttonLabel: "VIEW BLOG",
    buttonLink: "/blog",
  },
];

const PreviousArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const Banner = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (link) => {
    if (link) navigate(link);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: (_current, next) => setCurrentSlide(next),
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div className={styles.dotsContainer}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={styles.customDot}>
        {i + 1}
      </div>
    )
  };

  return (
    <div className={styles.bannerContainer}>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageOverlay}></div>
            <img src={image.src} alt={image.alt} className={styles.slideImage} />
            
            <div className={styles.contentOverlay}>
              <div className={styles.textContainer}>
                <div className={styles.textContent}>
                  <h2 data-aos="fade-down" data-aos-duration="1000" className={styles.mainText}>
                    {image.text}
                  </h2>
                  <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className={styles.subText}>
                    {image.subtext}
                  </p>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <button
                      className={styles.ctaButton}
                      onClick={() => handleButtonClick(image.buttonLink)}
                    >
                      {image.buttonLabel}
                      <FontAwesomeIcon icon={faPlayCircle} className={styles.buttonIcon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Progress indicator */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ 
            animation: `progress ${settings.autoplaySpeed}ms linear`,
            animationPlayState: 'running' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;