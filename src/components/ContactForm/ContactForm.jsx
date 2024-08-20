import "./ContactFormStyles.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import bg from "../../assets/video/main.mp4";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState(''); // Corrected the state name to lowercase
    const [message, setMessage] = useState(''); // Corrected the state name

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_657ab6c';
        const templateID = 'template_bfwxv2n';
        const publicKey = 'tiAAq4sK8otmMLjWo';

        const templateParams = {
            form_name: name,
            form_email: email,
            to_name: "web Wizard",
            subject: subject, // Correctly passing the subject to the template
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                () => {
                    console.log("Email sent successfully!");
                },
                (error) => {
                    console.error('Failed to send email:', error.text);
                }
            );
    };

    return (
        <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
            <div className="form-container">
                <div>
                    <video
                        src={bg}
                        autoPlay
                        loop
                        muted
                        className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                    />
                </div>

                <form onSubmit={sendEmail} className="ContactForm">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                    <label>Subject</label>
                    <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} /> {/* Fixed input type */}

                    <label>Message</label>
                    <textarea cols="30" rows="2" value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                        Send Message
                    </button> {/* Removed unnecessary <a> tag */}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
