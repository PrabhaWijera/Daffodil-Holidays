// MapComponent.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 6.9271,  // Default center latitude
    lng: 79.9585  // Default center longitude
};

// eslint-disable-next-line react/prop-types
const MapComponent = ({ places }) => {
    return (
        <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        position={{ lat: place.latitude, lng: place.longitude }}
                        title={place.title}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
