import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const packages = [
    {
        id: 1,
        title: 'Explore Ceylon',
        locations: {
            'SRI LANKA': {
                description: 'Discover the beauty of Sri Lanka...',
                imgSrc: './assets/images/package-ceylon-srilanka.jpg',
                imgAlt: 'Explore Ceylon in Sri Lanka',
                duration: '7 Days',
                pax: '10',
                price: 799,
            },
            'MALDIVES': {
                description: 'Experience the charm of the Maldives...',
                imgSrc: './assets/images/package-ceylon-maldives.jpg',
                imgAlt: 'Explore Ceylon in Maldives',
                duration: '5 Days',
                pax: '8',
                price: 999,
            },
            'UAE': {
                description: 'Explore the wonders of UAE...',
                imgSrc: './assets/images/package-ceylon-uae.jpg',
                imgAlt: 'Explore Ceylon in UAE',
                duration: '6 Days',
                pax: '12',
                price: 899,
            },
        }
    },
    {
        id: 2,
        title: 'Green Nature',
        locations: {
            'SRI LANKA': {
                description: 'Immerse yourself in the lush greenery of Sri Lanka...',
                imgSrc: './assets/images/package-green-srilanka.jpg',
                imgAlt: 'Green Nature in Sri Lanka',
                duration: '8 Days',
                pax: '12',
                price: 849,
            },
            'MALDIVES': {
                description: 'Experience the serene nature of the Maldives...',
                imgSrc: './assets/images/package-green-maldives.jpg',
                imgAlt: 'Green Nature in Maldives',
                duration: '6 Days',
                pax: '6',
                price: 1099,
            },
            'UAE': {
                description: 'Discover the vibrant nature spots of UAE...',
                imgSrc: './assets/images/package-green-uae.jpg',
                imgAlt: 'Green Nature in UAE',
                duration: '7 Days',
                pax: '10',
                price: 999,
            },
        }
    }
];

const ExclusivePackages = () => {
    const { country } = useParams();  // Get the country from the URL

    const navigate = useNavigate();

    const handleBookNowClick = (pkg, locationDetails) => {
        // Navigate to the booking form and pass the package data as state
        navigate('/booking', {
            state: {
                title: pkg.title,
                country,
                ...locationDetails
            }
        });
    };
    return (
        <section className="py-12" id="package">
            <div className="container mx-auto px-4">
                <p className="text-center text-secondary text-lg">Popular Packages</p>
                <h2 className="text-center text-3xl font-bold mb-4">Checkout Our Packages</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                    Discover the best travel experiences tailored for {country}.
                </p>

                <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {packages.map((pkg) => {
                        const locationDetails = pkg.locations[country];

                        // Skip rendering if location details are not found
                        if (!locationDetails) {
                            return null;
                        }

                        return (
                            <li key={pkg.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="package-card">
                                    <figure className="card-banner">
                                        {locationDetails.imgSrc && (
                                            <img
                                                src={locationDetails.imgSrc}
                                                alt={locationDetails.imgAlt}
                                                className="w-full h-48 object-cover"
                                                loading="lazy"
                                            />
                                        )}
                                    </figure>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                                        <p className="text-gray-600 mb-4">{locationDetails.description}</p>

                                        <ul className="flex flex-wrap text-gray-500 text-sm mb-4">
                                            <li className="flex items-center mr-4">
                                                <ion-icon name="time" className="mr-1"></ion-icon>
                                                <p>{locationDetails.duration}</p>
                                            </li>
                                            <li className="flex items-center mr-4">
                                                <ion-icon name="people" className="mr-1"></ion-icon>
                                                <p>pax: {locationDetails.pax}</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 border-t flex justify-between items-center">
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-primary">
                                                ${locationDetails.price} <span className="text-sm text-gray-500">/ per person</span>
                                            </p>
                                            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                                                    onClick={() => handleBookNowClick(pkg, locationDetails)}
                                            >Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default ExclusivePackages;
