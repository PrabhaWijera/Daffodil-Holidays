// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const TopImageContainer = ({ images }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {/* eslint-disable-next-line react/prop-types */}
            {images.map((image, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <div className="w-full h-48"> {/* Fixed height */}
                        <img src={image} alt={`image-${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopImageContainer;
