import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/colombo/IMG_0979 copy.webp";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/pakages/UAE.webp";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Sri lanka",
    description:
   " Top places in Sri Lanka: Sigiriya, Ella, Kandy, Galle, Yala National Park, Nuwara Eliya.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Moldeves",
    description:
      "Top places in the US: Malé, Maafushi, Hulhumalé, Baa Atoll, Sun Island, Addu City.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in UAE",
    description:
      "Top places in the UAE: Burj Khalifa, Sheikh Zayed Mosque, Palm Jumeirah, Dubai Mall, Louvre Abu Dhabi..",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
