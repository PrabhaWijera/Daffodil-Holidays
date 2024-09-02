import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Modal from './contactModel.jsx'
import './ContactFormStyles.css';

function ContactForm({ isActive }) {
    // const {} = useContext(NavLinkContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_657ab6c';
        const templateID = 'template_bfwxv2n';
        const publicKey = 'tiAAq4sK8otmMLjWo';

        const templateParams = {
            myname: "daffodil Holidays",
            form_name: name,
            form_email: email,
            mobile: mobile,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                alert("Sent..")
                console.log("Email sent successfully!");
                setIsModalOpen(false);
            }, (error) => {
                alert("Something went wrong. Check your connection and try again")
                console.error('Failed to send email:', error.text);
            });
    };

    return (
        <div>
            {/*<button*/}
            {/*    className="open-modal-btn bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full"*/}
            {/*    onClick={() => setIsModalOpen(true)}*/}
            {/*>*/}
            {/*    Contact Us*/}
            {/*</button>*/}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={sendEmail} className="ContactForm">
                    <input
                        placeholder="Enter your name :"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <input
                        placeholder="Enter your E-mail :"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <input
                        placeholder="Enter your contact Number :"
                        type="number"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                        required
                    />
                    <input
                        placeholder="Subject :"
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        required
                    />
                    <textarea
                        placeholder="Type your Message here..."
                        cols="30"
                        rows="2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="submit-btn bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full"
                    >
                        Send Message
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default ContactForm;
