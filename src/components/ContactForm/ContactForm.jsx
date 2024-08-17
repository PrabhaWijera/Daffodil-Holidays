import "./ContactFormStyles.css"
// eslint-disable-next-line no-unused-vars
import React from "react";
import bg from "../../assets/video/main.mp4"
function ContactForm () {

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

                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button
                        className="btn bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                        <a href="/regform">Send Massage</a>
                    </button>

                </form>
            </div>
        </div>


    )
}

export default ContactForm;