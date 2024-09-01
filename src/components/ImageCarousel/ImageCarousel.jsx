// src/components/ImageCarousel/ImageCarousel.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//images
import img1 from "../../assets/places/Ella.jpg"
import img2 from "../../assets/places/Trincomalee.jpg"
import img3 from "../../assets/places/Pasikudah.jpg"
import img4 from "../../assets/places/Arugam Bay.jpg"
import img5 from "../../assets/places/place5.jpg"
const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        backgroundSize:"cover",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Change this to adjust the slide speed
    };

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[500px] object-cover"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
