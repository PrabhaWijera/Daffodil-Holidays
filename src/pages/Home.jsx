import React from "react";


import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

import BlogsComp from "../components/Blogs/BlogsComp.jsx";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.jsx";


import HeroPlaces from "../components/Places/HeroPlaces.jsx";



const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);


  return (
      <>
        <div>
          <div className="h-[500px] relative bg-cover">
            <ImageCarousel />
          </div>

          <HeroPlaces/>
          <BannerPic img={BannerImg} />
          <BlogsComp />
          <Banner />
          <BannerPic img={Banner2} />
          {/*<Testimonial />*/}

          <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </>
  );
};

export default Home;
