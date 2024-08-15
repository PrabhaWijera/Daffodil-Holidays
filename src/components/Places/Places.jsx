import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const AncientCities= [
  {
    img: Img1,
    title: "Polonnaruwa",
    location: "Sri Lanka",
    description: "The first capital of Sri Lanka, home to ancient stupas, monasteries, and the sacred Bodhi tree.see more...",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Anuradhapura",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Sigiriya",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
];


const HillCountry= [
  {
    img: Img1,
    title: "Kandy",
    location: "Sri Lanka",
    description: "The first capital of Sri Lanka, home to ancient stupas, monasteries, and the sacred Bodhi tree.see more...",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Nuwara Eliya",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Ella",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
];


const Westcoast= [
  {
    img: Img1,
    title: "Negombo",
    location: "Sri Lanka",
    description: "The first capital of Sri Lanka, home to ancient stupas, monasteries, and the sacred Bodhi tree.see more...",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Colombo",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Kalpitiya",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
];


const DownSouth= [
  {
    img: Img1,
    title: "Galle",
    location: "Sri Lanka",
    description: "The first capital of Sri Lanka, home to ancient stupas, monasteries, and the sacred Bodhi tree.see more...",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Mirissa",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Tangalle",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
];


const EastCoast= [
  {
    img: Img1,
    title: "Trincomalee",
    location: "Sri Lanka",
    description: "The first capital of Sri Lanka, home to ancient stupas, monasteries, and the sacred Bodhi tree.see more...",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Arugam Bay ",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Pasikudah",
    location: "Sri Lanka",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
];




const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit in Sri Lanka
          </h1>
           <h4 className="text-green-950 font-semibold mb-3 text-2xl">
           Ancient Cities
           </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {AncientCities.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>

          <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
          Hill Country
           </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {HillCountry.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>



          
          <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
          West coast
           </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {HillCountry.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>


          <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
          Down South
           </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {HillCountry.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>


          <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
          East Coast
           </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {HillCountry.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
