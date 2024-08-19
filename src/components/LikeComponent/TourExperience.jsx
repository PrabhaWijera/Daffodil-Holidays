// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import bg from "../../assets/places/Trincomalee.jpg"
const TourExperience = () => {
    return (
        <div className="relative">
            <img
                src={bg} // Replace with your image path
                alt="Tour Experience"
                className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold text-white text-center">
                    Plan an Unforgettable Experience
                    <br />
                    With Us!
                </h2>
                <p className="text-lg text-white text-center mt-4 mx-4">
                    Let us tailor your stay and experience to perfectly fit your budget.
                </p>
                <div className="mt-6">
                    <p className="text-lg text-white text-center">
                        BOOK YOUR TOUR NOW
                    </p>
                    <a
                        href="tel:+94 76 2150787"
                        className="flex items-center justify-center mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        <FaPhoneAlt className="mr-2" />
                        +94 77 123 1234
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TourExperience;
