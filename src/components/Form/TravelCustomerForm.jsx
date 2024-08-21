// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const TravelCustomerForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
        address: '',
        email: '',
        city: '',
        packageType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = async () => {
        try {
            const storedData = localStorage.getItem('travelCustomerData');
            const formData = JSON.parse(storedData);

            const templateParams = {
                from_name: formData.firstName + ' ' + formData.lastName,
                to_name: 'Prabhash Wijerathna',
                message: `
          First Name: ${formData.firstName}
          Last Name: ${formData.lastName}
          Phone: ${formData.phone}
          Age: ${formData.age}
          Address: ${formData.address}
          Email: ${formData.email}
          City: ${formData.city}
          Package Type: ${formData.packageType}
        `,
                reply_to: formData.email,
            };

            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay

            const response = await emailjs.send('service_657ab6c', 'template_x5x12hs', templateParams, 'tiAAq4sK8otmMLjWo');
           alert("Booking Conformed")
            console.log('Email sent successfully:', response);
        } catch (error) {
            alert("Check your connection and try again.")
            console.error('Failed to send email:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save form data to local storage
        localStorage.setItem('travelCustomerData', JSON.stringify(formData));

        // Send email
        sendEmail();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First
                            Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <select
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select age</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46-60">46-60</option>
                            <option value="60+">60+</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="packageType" className="block text-sm font-medium text-gray-700">Package
                            Type</label>
                        <select
                            id="packageType"
                            name="packageType"
                            value={formData.packageType}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select package</option>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Conform Your Booking
                </button>
            </form>
        </div>

    );
};

export default TravelCustomerForm;
