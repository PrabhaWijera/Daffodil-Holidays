// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const PlaceCard = ({
                     // eslint-disable-next-line react/prop-types
  img,
                     // eslint-disable-next-line react/prop-types
  title,
                     // eslint-disable-next-line react/prop-types
  location,
                     // eslint-disable-next-line react/prop-types
  description,
// eslint-disable-next-line react/prop-types
  type,
                     // eslint-disable-next-line react/prop-types
 id
}) => {


  const navigate = useNavigate();

  const handleNavigate =async () => {
    navigate(`/best-places/${id}`);
  };

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg"
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="rounded-tl-[15px] rounded-tr-[15px] mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <button onClick={handleNavigate} className="bg-readMoreBtnbg text-readMoreBtntxt px-4 py-2 rounded w-[7rem] h-10">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
