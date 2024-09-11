// eslint-disable-next-line no-unused-vars
import React from 'react';
import LikeComponent from '../LikeComponent/LikeComponent.jsx';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import TourExperience from "../LikeComponent/TourExperience.jsx";
import { useNavigate } from 'react-router-dom';
import sl from "../../assets/pakages/sl flag.webp"
import uae from "../../assets/pakages/UAE.webp"
import moldeves from "../../assets/pakages/flag-of-maldives (1).webp"
const destinations = [
    {
        id: 1,
        image: sl,
        country: 'SRI LANKA',
        title: 'SRI   LANKA',
        description: 'Italy, renowned for its rich history, art, and cuisine, offers breathtaking landscapes from Rome’s ancient ruins to Tuscany’s rolling hills. Enjoy world-class wine, stunning architecture, and vibrant culture across the country.',
    },
    {
        id: 2,
        image: moldeves,
        country: 'MALDIVES',
        title: 'MALDIVES',
        description: 'Dubai, a dazzling city in the UAE, blends modern skyscrapers, luxury shopping, and rich culture. Explore iconic landmarks like the Burj Khalifa, pristine beaches, and vibrant nightlife in this global metropolis.',
    },
    {
        id: 3,
        image: uae,
        country: 'UAE',
        title: 'UAE',
        description: 'Japan, a blend of ancient tradition and cutting-edge modernity, offers stunning temples, bustling cities, and serene landscapes. Experience vibrant culture, exquisite cuisine, and breathtaking natural beauty throughout this unique archipelago.',
    },
];

const PopularDestination = () => {

    const navigate = useNavigate();

    const handleCardClick = (country) => {
        navigate(`/package-details/${country}`);
    };

    return (
        <section id="destination" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <p className="text-sm text-gray-500">Uncover place</p>
                <h2 className="text-3xl font-bold mt-2 mb-4">Popular Destinations</h2>
                <p className="text-gray-600 mb-8">
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque
                    laudantium.
                    Sit ornare mollitia tenetur, aptent.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {destinations.map((destination) => (
                        <div key={destination.id} className="bg-white shadow-md rounded-lg overflow-hidden"    onClick={() => handleCardClick(destination.country)}>
                            <div className="relative">
                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-2 right-2">
                                    <LikeComponent/>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <IonIcon key={index} icon={star} className="text-yellow-500 w-4 h-4"/>
                                    ))}
                                </div>
                                {/*<p className="text-sm text-gray-500">*/}
                                {/*    <a href="#" className="hover:underline">*/}
                                {/*        {destination.country}*/}
                                {/*    </a>*/}
                                {/*</p>*/}
                                <h3 className="text-xl font-semibold mt-2">
                                    <a href="#" className="hover:underline">
                                        {destination.title}
                                    </a>
                                </h3>
                                <p className="text-gray-600 mt-2">{destination.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                    More Destinations
                </button>
            </div>
            <div className="pt-5 pb-5">
                <TourExperience/>
            </div>
            <div className="flex justify-center items-center h-[10rem] bg-gray-50">
                <h1
                    className="text-5xl text-center"
                    style={{
                        fontFamily: "'Lexend Zetta', sans-serif",
                        color: '#BFB4B4',
                        letterSpacing: '0.25em', // Adds spacing between letters
                    }}
                >
                    D A F F O D I A L&nbsp;&nbsp;H O L I D A Y S
                </h1>
            </div>
        </section>
    );
};

export default PopularDestination;
