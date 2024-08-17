import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import TopImageContainer from "../components/ImgContainr/TopIMageContainer.jsx";
import img1 from "../assets/places/Galle.jpg"
import img2 from "../assets/places/Pasikudah.jpg"
import img3 from "../assets/places/Ella.jpg"
import img4 from "../assets/places/Kandy.jpg"
const images = [
    img1,img2,img3,img4
];
const About = () => {

  return (
      <>
          <div className="container mx-auto p-4">
              <TopImageContainer images={images}/>
          </div>
          <div className="container pt-14">

              <div className="py-10">
                  <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                      About us <br/> <br/><br/>
                  </h1>
                  <p>
                      <h1 className=" text-2xl font-bold">Welcome to Daffodil Holidays</h1> <br/>
                      At Daffodil Holidays, we believe that travel is more than just a journey; it's an experience that
                      should inspire, amaze, and transform. Founded in the heart of Sri Lanka, our company has grown to
                      become a leader in the global tourism industry, offering both inbound and outbound travel services
                      that exceed expectations.

                  </p>
                  <br/>
                  <p>
                      <h1 className="text-2xl font-bold">Our Story</h1> <br/>
                      Daffodil Holidays was born out of a passion for showcasing the unparalleled beauty and rich
                      culture of Sri Lanka to the world. From the golden beaches of the south to the misty mountains of
                      the central highlands, we invite travellers to explore and discover the hidden gems of our island
                      nation. But our journey doesn’t end here; we also open doors to global adventures, connecting
                      travellers with unforgettable experiences across the globe. <br/> <br/>
                      <h1 className="text-2xl font-bold">Our Commitment</h1> <br/>
                      Guided by our vision to be a leading global tourism company, we are dedicated to delivering
                      extraordinary experiences that transcend borders. We pride ourselves on our customer-centric
                      approach, ensuring that every trip is tailored to meet the unique needs and desires of our
                      clients. Whether you’re seeking an immersive cultural experience, an adventurous escape, or a
                      peaceful retreat, Daffodil Holidays is here to make your travel dreams a reality. <br/> <br/>
                      <h1 className="text-2xl font-bold">Why Choose Us?</h1> <br/>
                      • Experience Beyond Expectations: Our slogan is not just words; it’s a promise. We go above and
                      beyond to ensure that every journey with us is memorable and fulfilling. <br/>
                      • Integrity and Transparency: We believe in building trust through honesty, fairness, and clear
                      communication in all our interactions. <br/>
                      • Innovative and Creative Solutions: Our team constantly seeks new ways to enhance your travel
                      experience, offering unique and personalized itineraries.
                      <br/><br/><br/>

                  </p>
                  <p><h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                      Our Vision </h1>
                      “To be a leading global tourism company based in Sri Lanka, renowned for delivering extraordinary
                      experiences that transcend borders and exceed expectations. We aspire to connect travellers with
                      the world through unparalleled inbound and outbound travel services, showcasing the best of Sri
                      Lanka and beyond.” <br/>
                      <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                          Our Mission </h1>
                      “Our mission is to provide exceptional travel experiences by offering tailored inbound and
                      outbound tour services that go beyond expectations. We are dedicated to showcasing Sri Lanka’s
                      unique beauty and culture while facilitating memorable global journeys for our clients. Through
                      innovative solutions and a commitment to excellence, we aim to enrich lives, foster global
                      connections, and support sustainable tourism practices.” <br/>
                      <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                          Values </h1>
                      1. Customer-Centric Excellence <br/>
                      • We prioritize our customers' needs and strive to exceed their expectations at every turn,
                      delivering personalized experiences that leave a lasting impression. <br/> <br/>
                      2. Integrity and Transparency <br/>
                      • We operate with the highest ethical standards, ensuring honesty, fairness, and transparency in
                      all our interactions. <br/> <br/>
                      3. Innovation and Creativity <br/>
                      • We embrace innovation and creativity to continuously enhance our services, offering unique and
                      memorable travel experiences. <br/> <br/>
                      4. Sustainability and Responsibility <br/>
                      • We are committed to responsible tourism, promoting practices that protect the environment and
                      respect local cultures, ensuring the well-being of future generations. <br/> <br/>
                      5. Global Connectivity <br/>
                      • We believe in building connections across borders, facilitating cultural exchange and
                      understanding through our comprehensive inbound and outbound travel services. <br/> <br/>
                      6. Team Collaboration and Empowerment <br/>
                      • We foster a collaborative environment where every team member is empowered to contribute to our
                      shared success, ensuring that our collective efforts lead to exceptional outcomes. <br/> <br/>
                      7. Passion for Sri Lanka <br/>
                      • We are passionate about showcasing the beauty, culture, and diversity of Sri Lanka, and we take
                      pride in being ambassadors of our homeland. <br/>

                  </p>
              </div>
          </div>
          <Location/>
          <BlogsComp/>
      </>
  );
};

export default About;
