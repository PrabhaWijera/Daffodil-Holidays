import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../../Data/PlacesData';
import { IoLocationSharp } from 'react-icons/io5';
import MapComponent from "../MapComponent/MapComponent.jsx";

const PlaceDetail = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        const fetchedPlace = placesData.find(place => place.id === id); // Use find to search the array
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
        <div className="p-4">
            <MapComponent places={[place]} /> {/* Pass the place data to the MapComponent */}
            <img src={place.img} alt={place.title} className="w-full h-[300px] object-cover mb-4" />
            <h1 className="text-2xl font-bold">{place.title}</h1>
            <div className="flex items-center gap-2 opacity-70 mt-2">
                <IoLocationSharp />
                <span>{place.description}</span>
            </div>
            <p className="mt-2">Longitude: {place.longitude}</p>
            <p className="mt-2">Latitude: {place.latitude}</p>
        </div>
    );
};

export default PlaceDetail;
