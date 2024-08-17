import React from 'react';

const TopImageContainer = ({ images }) => {
    return (
        <div className="flex flex-wrap justify-center mt-[5rem]">
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
