// eslint-disable-next-line no-unused-vars
import React from "react";
import PlaceCard from "./PlaceCard";
import data from "../../Data/data.js"




// eslint-disable-next-line react/prop-types
const Places = () => {
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
              {data.AncientCities.map((item, index) => (
                  <PlaceCard
                      key={index}
                      {...item}
                  />
              ))}
            </div>

            <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
              Hill Country
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {data.HillCountry.map((item, index) => (
                  <PlaceCard
                      key={index}
                      {...item}
                  />
              ))}
            </div>


            <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
              West coast
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {data.Westcoast.map((item, index) => (
                  <PlaceCard
                      key={index}
                      {...item}
                  />
              ))}
            </div>


            <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
              Down South
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {data.DownSouth.map((item, index) => (
                  <PlaceCard
                      key={index}
                      {...item}
                  />
              ))}
            </div>


            <h4 className="text-green-950 font-semibold mb-3 text-2xl mt-3">
              East Coast
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {data.EastCoast.map((item, index) => (
                  <PlaceCard
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
