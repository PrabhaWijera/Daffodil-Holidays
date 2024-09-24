// eslint-disable-next-line no-unused-vars
import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import TopImageContainer from "../components/ImgContainr/TopIMageContainer.jsx";
import img1 from "../assets/places/selected images for daffodil/fishing resized.webp";
import img2 from "../assets/edited eliphent/IMG-20240818-WA0032 copy.jpg";
import img3 from "../assets/places/selected images for daffodil/kandyhall_resized.webp";
import img4 from "../assets/edited eliphent/resize/7.webp";
import chooseUsImg from "../assets/pixabay/lotustower.jpg"; // Replace with your image path

const images = [img1, img2, img3, img4];

const About = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <TopImageContainer images={images} />
            </div>
            <div className="container mx-auto p-4">
                <div className="py-10">
                    <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                        About Us
                    </h1>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Welcome to Daffodil Holidays</h2>
                        <p>
                            At Daffodil Holidays, we believe that travel is more than just a journey; it's an experience
                            that
                            should inspire, amaze, and transform. Founded in the heart of Sri Lanka, our company has
                            grown to
                            become a leader in the global tourism industry, offering both inbound and outbound travel
                            services
                            that exceed expectations.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                        <p>
                            Daffodil Holidays was born out of a passion for showcasing the unparalleled beauty and rich
                            culture of Sri Lanka to the world. From the golden beaches of the south to the misty
                            mountains of
                            the central highlands, we invite travellers to explore and discover the hidden gems of our
                            island
                            nation. But our journey doesn’t end here; we also open doors to global adventures,
                            connecting
                            travellers with unforgettable experiences across the globe.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                        <p>
                            Guided by our vision to be a leading global tourism company, we are dedicated to delivering
                            extraordinary experiences that transcend borders. We pride ourselves on our customer-centric
                            approach, ensuring that every trip is tailored to meet the unique needs and desires of our
                            clients. Whether you’re seeking an immersive cultural experience, an adventurous escape, or
                            a
                            peaceful retreat, Daffodil Holidays is here to make your travel dreams a reality.
                        </p>
                    </section>
                    <section className="flex items-center py-10">
                        <div className="w-1/4 pr-4">
                            <img
                                src={chooseUsImg}
                                alt="Why Choose Us"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />

                        </div>
                        <div className="w-1/2 pl-4">
                            <h2 className="text-3xl font-bold mb-4 border-l-8 border-primary/50 pl-2">
                                Why Choose Us?
                            </h2>
                            <p className="text-lg mb-6">
                                • Experience Beyond Expectations: Our slogan is not just words; it’s a promise. We go
                                above and beyond to ensure that every journey with us is memorable and fulfilling. <br/>
                                • Integrity and Transparency: We believe in building trust through honesty, fairness,
                                and clear communication in all our interactions. <br/>
                                • Innovative and Creative Solutions: Our team constantly seeks new ways to enhance your
                                travel experience, offering unique and personalized itineraries.
                            </p>
                            <a
                                href="/itinery"
                                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            >
                                Book Now
                            </a>
                        </div>
                    </section>
                    <section className="mb-12">
                        <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Our Vision</h2>
                        <p>
                            “To be a leading global tourism company based in Sri Lanka, renowned for delivering
                            extraordinary
                            experiences that transcend borders and exceed expectations. We aspire to connect travellers
                            with
                            the world through unparalleled inbound and outbound travel services, showcasing the best of
                            Sri
                            Lanka and beyond.”
                        </p>
                    </section>
                    <section className="mb-12">
                        <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Our Mission</h2>
                        <p>
                            “Our mission is to provide exceptional travel experiences by offering tailored inbound and
                            outbound tour services that go beyond expectations. We are dedicated to showcasing Sri
                            Lanka’s
                            unique beauty and culture while facilitating memorable global journeys for our clients.
                            Through
                            innovative solutions and a commitment to excellence, we aim to enrich lives, foster global
                            connections, and support sustainable tourism practices.”
                        </p>
                    </section>
                    <section className="mb-12">
                        <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                            Values
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold">1. Customer-Centric Excellence</h3>
                                <p className="mt-2">
                                    • We prioritize our customers' needs and strive to exceed their expectations at
                                    every turn,
                                    delivering personalized experiences that leave a lasting impression.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">2. Integrity and Transparency</h3>
                                <p className="mt-2">
                                    • We operate with the highest ethical standards, ensuring honesty, fairness, and
                                    transparency in
                                    all our interactions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">3. Innovation and Creativity</h3>
                                <p className="mt-2">
                                    • We embrace innovation and creativity to continuously enhance our services,
                                    offering unique and
                                    memorable travel experiences.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">4. Sustainability and Responsibility</h3>
                                <p className="mt-2">
                                    • We are committed to responsible tourism, promoting practices that protect the
                                    environment and
                                    respect local cultures, ensuring the well-being of future generations.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">5. Global Connectivity</h3>
                                <p className="mt-2">
                                    • We believe in building connections across borders, facilitating cultural exchange
                                    and
                                    understanding through our comprehensive inbound and outbound travel services.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">6. Team Collaboration and Empowerment</h3>
                                <p className="mt-2">
                                    • We foster a collaborative environment where every team member is empowered to
                                    contribute to our
                                    shared success, ensuring that our collective efforts lead to exceptional outcomes.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">7. Passion for Sri Lanka</h3>
                                <p className="mt-2">
                                    • We are passionate about showcasing the beauty, culture, and diversity of Sri
                                    Lanka, and we take
                                    pride in being ambassadors of our homeland.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Location/>
            <BlogsComp/>
        </>
    );
};

export default About;
