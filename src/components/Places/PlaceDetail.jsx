// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../../Data/PlacesData';
import { IoLocationSharp } from 'react-icons/io5';
import MapComponent from "../MapComponent/MapComponent.jsx";

const PlaceDetail = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        const fetchedPlace = placesData.find(place => place.id === id);
        if (fetchedPlace) {
            setPlace(fetchedPlace);
        } else {
            setPlace(null); // Handle place not found
        }
    }, [id]);

    if (!place) {
        return <p>Place not found</p>;
    }

    return (
        <div className="place">
            <div className="flex flex-col lg:flex-row p-4 gap-6">
                {/* Left Side - Title, Image, Description */}
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold text-yellow-500 mb-4">{place.title}</h1>
                    <img src={place.img} alt={place.title} className="w-full h-[300px] object-cover mb-4"/>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <IoLocationSharp className="text-xl"/>
                        <span>{place.description}</span>
                    </div>
                    <p className="text-gray-700">Longitude: {place.longitude}</p>
                    <p className="text-gray-700">Latitude: {place.latitude}</p>
                </div>

                {/* Right Side - Map */}
                <div className="lg:w-1/2 h-[400px] lg:h-auto">
                    <MapComponent places={[place]}/>
                </div>
            </div>
        </div>

    );
};

export default PlaceDetail;
