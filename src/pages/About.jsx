import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us <br/> <br/>
          </h1>
          <p>
            <h1 className=" text-2xl font-bold">Welcome to Daffodil Holidays</h1> <br/>
            At Daffodil Holidays, we believe that travel is more than just a journey; it's an experience that should inspire, amaze, and transform. Founded in the heart of Sri Lanka, our company has grown to become a leader in the global tourism industry, offering both inbound and outbound travel services that exceed expectations.

          </p>
          <br />
          <p>
             <h1 className="text-2xl font-bold">Our Story</h1> <br/>
            Daffodil Holidays was born out of a passion for showcasing the unparalleled beauty and rich culture of Sri Lanka to the world. From the golden beaches of the south to the misty mountains of the central highlands, we invite travellers to explore and discover the hidden gems of our island nation. But our journey doesn’t end here; we also open doors to global adventures, connecting travellers with unforgettable experiences across the globe. <br/> <br/>
             <h1 className="text-2xl font-bold">Our Commitment</h1> <br/>
            Guided by our vision to be a leading global tourism company, we are dedicated to delivering extraordinary experiences that transcend borders. We pride ourselves on our customer-centric approach, ensuring that every trip is tailored to meet the unique needs and desires of our clients. Whether you’re seeking an immersive cultural experience, an adventurous escape, or a peaceful retreat, Daffodil Holidays is here to make your travel dreams a reality. <br/> <br/>
            <h1 className="text-2xl font-bold">Why Choose Us?</h1> <br/>
            •	Experience Beyond Expectations: Our slogan is not just words; it’s a promise. We go above and beyond to ensure that every journey with us is memorable and fulfilling. <br/>
            •	Integrity and Transparency: We believe in building trust through honesty, fairness, and clear communication in all our interactions. <br/>
            •	Innovative and Creative Solutions: Our team constantly seeks new ways to enhance your travel experience, offering unique and personalized itineraries.

          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
