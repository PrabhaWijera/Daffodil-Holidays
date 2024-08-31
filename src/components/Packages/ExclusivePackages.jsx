// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from 'react-router-dom';
const packages = [
    {
        id: 1,
        title: "Experience The Great Holiday On Beach",
        description: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
        duration: "7D/6N",
        pax: 10,
        location: "Malaysia",
        reviews: 25,
        rating: 5,
        price: 750,
        imgSrc: "./assets/images/packege-1.jpg",
        imgAlt: "Experience The Great Holiday On Beach",
    },
    {
        id: 2,
        title: "Summer Holiday To The Oxolotan River",
        description: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
        duration: "7D/6N",
        pax: 10,
        location: "Malaysia",
        reviews: 20,
        rating: 5,
        price: 520,
        imgSrc: "./assets/images/packege-2.jpg",
        imgAlt: "Summer Holiday To The Oxolotan River",
    },
];

const ExclusivePackages = () => {
    const { id } = useParams();
    return (
        <section className="py-12" id="package">
            <div className="container mx-auto px-4">
                <p className="text-center text-secondary text-lg">Popular Packages</p>
                <h2 className="text-center text-3xl font-bold mb-4">Checkout Our Packages</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
                </p>

                <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <li key={pkg.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="package-card">
                                <figure className="card-banner">
                                    <img
                                        src={pkg.imgSrc}
                                        alt={pkg.imgAlt}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                                    <p className="text-gray-600 mb-4">{pkg.description}</p>

                                    <ul className="flex flex-wrap text-gray-500 text-sm mb-4">
                                        <li className="flex items-center mr-4">
                                            <ion-icon name="time" className="mr-1"></ion-icon>
                                            <p>{pkg.duration}</p>
                                        </li>
                                        <li className="flex items-center mr-4">
                                            <ion-icon name="people" className="mr-1"></ion-icon>
                                            <p>pax: {pkg.pax}</p>
                                        </li>
                                        <li className="flex items-center">
                                            <ion-icon name="location" className="mr-1"></ion-icon>
                                            <p>{pkg.location}</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 border-t flex justify-between items-center">
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-500 mr-2">({pkg.reviews} reviews)</p>
                                        <div className="flex text-yellow-500">
                                            {[...Array(pkg.rating)].map((_, i) => (
                                                <ion-icon key={i} name="star"></ion-icon>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-primary">
                                            ${pkg.price} <span className="text-sm text-gray-500">/ per person</span>
                                        </p>
                                        <button className="btn btn-secondary mt-2">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-8">
                    <button className="btn btn-primary">View All Packages</button>
                </div>
            </div>
        </section>
    );
};

export default ExclusivePackages;
