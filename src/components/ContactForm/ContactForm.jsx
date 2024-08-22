import "./ContactFormStyles.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import bg from "../../assets/video/main.mp4";
import {refresh} from "ionicons/icons";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile,setMobile]=useState('');
    const [subject, setSubject] = useState(''); // Corrected the state name to lowercase
    const [message, setMessage] = useState(''); // Corrected the state name



    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_657ab6c';
        const templateID = 'template_bfwxv2n';
        const publicKey = 'tiAAq4sK8otmMLjWo';

        const templateParams = {
            myname:"daffodil Holidays",
            form_name: name,
            form_email: email,
            mobile:mobile,
            subject: subject, // Correctly passing the subject to the template
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                () => {
                    alert("Sent..")
                    console.log("Email sent successfully!");


                },
                (error) => {
                    alert("Something went wrong.Check your connection and try again")
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
                    {/*<label>Name</label>*/}
                    <input placeholder="Enter your name :" type="text" onChange={(e) => setName(e.target.value)} value={name} />

                    {/*<label>Email</label>*/}
                    <input placeholder="Enter your E-mail :" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                    <input placeholder="Enter your contact Number" type="number" onChange={(e)=>setMobile(e.target.value)}value={mobile}/>
                    {/*<label>Subject</label>*/}
                    <input placeholder="Subject" type="text" onChange={(e) => setSubject(e.target.value)} value={subject} /> {/* Fixed input type */}

                    {/*<label>Message</label>*/}
                    <textarea placeholder="Type your Message here" cols="30" rows="2" value={message} onChange={(e) => setMessage(e.target.value)} />

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
