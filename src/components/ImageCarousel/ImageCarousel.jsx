// src/components/ImageCarousel/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//images
import img1 from "../../assets/MasterLogo.png";
import img2 from "../../assets/pixabay/welcome2.jpeg";
import img3 from "../../assets/pixabay/lotustower.jpg";
import img4 from "../../assets/places/Arugam Bay.jpg";
import img5 from "../../assets/places/place5.jpg";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    };

    const images = [img1, img2, img3, img4, img5];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto">
            {/* Left Section with Text */}
            <div className="md:w-1/2 p-8 mb-10"> {/* Margin-bottom to move text down */}
                <h1 className="text-4xl font-bold mb-4">Discover Beautiful Destinations</h1>
                <p className="text-lg mb-6">
                    Experience the breathtaking landscapes, unique cultural experiences,
                    and serene beaches in the most exotic destinations across the country.
                    Explore hidden gems and famous tourist spots that are perfect for relaxation
                    and adventure.
                </p>
            </div>

            {/* Right Section with Image Carousel */}
            <div className="md:w-1/2 mb-10 image-carousel"> {/* Add the custom class here */}
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative flex justify-center items-center">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-[600px] md:h-[500px] object-cover rounded-full"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default ImageCarousel;
