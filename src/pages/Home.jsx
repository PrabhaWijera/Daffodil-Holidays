import React from "react";

import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import homeBg from '../assets/img.png'
import BlogsComp from "../components/Blogs/BlogsComp.jsx";
const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);


  return (
      <>
        <div>
          <div className="h-[700px] relative">
            {/*<video*/}
            {/*    autoPlay*/}
            {/*    loop*/}
            {/*    muted*/}
            {/*    className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"*/}
            {/*>*/}
            {/*  <source src={homeBg} type="video/mp4" />*/}
            {/*</video>*/}
            <img src={homeBg} alt="" className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"/>
            {/*/!*<Hero />*!/*/}
          </div>
          <Places/>
          <BannerPic img={BannerImg} />
          <BlogsComp />
          <Banner />
          <BannerPic img={Banner2} />
          <Testimonial />
          <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </>
  );
};

export default Home;
