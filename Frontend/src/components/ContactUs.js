import React, { useContext, useState } from 'react';
import './ContactUs.css'; // Import the CSS for styling
import contactImage from '../banners-image/hero/contact-img.jpg'
import { HeroSection } from './Buttons';
import { CartContext } from './CartContext';

function ContactUs() {

    const {showSuccess , showError} = useContext(CartContext)

    const [contactData, setContactData] = useState({
        userName: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setNewReview({ ...newReview, [name]: value });
        setContactData ({ ...contactData, [name]: value });
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
    
      

    
    
        try {
            const response = await fetch("http://localhost:5000/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });
    
    
            const data = await response.json();
            console.log("Response Data:", data); // Debugging: Check response data
    
            if (data.success) {
                showSuccess("Message sent successfully!");
            } else {
                showError(`Failed to sent message: ${data.message}`);
            }
        } catch (error) {
            console.error("Error Sending Message:", error);
            alert(`Something went wrong. Please try again: ${error.message}`);
        }
    };
    return (
        <div>
            {/* Hero Section */}

            <HeroSection headingLabel="Contact Us" heroBackground="contactHero"/>


            <h1 className='contact-heading'>We`re here to help you</h1>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-container">
                    {/* Left Side: Image */}
                    <div className="contact-image">
                        <img src={contactImage} alt="Contact Us" />
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form">
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleMessageSubmit}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="Enter your name" value={contactData.userName} onChange={handleInputChange} name='userName' required="true"/>

                            

                            <label htmlFor="phone">Your Phone</label>
                            
                            <input type="text" id="phone" placeholder="Enter your name" />
                            
                            <label htmlFor="email">Your Email</label>
                            
                            <input type="email" id="email" placeholder="Enter your email" value={contactData.email} onChange={handleInputChange} name='email' required="true"/>
                            
                            
 
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                rows="5"
                                value={contactData.message}
                                onChange={handleInputChange}
                                name='message'
                                required="true"
                            ></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <div className='location'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2129.1896861935566!2d74.45584480379576!3d31.121925978254428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d31.1226989!2d74.45614909999999!4m0!5e0!3m2!1sen!2s!4v1732838211358!5m2!1sen!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
        </div>
    );
}

export default ContactUs;
