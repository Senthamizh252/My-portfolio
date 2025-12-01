import React, { useRef } from 'react';
import '../styles/style.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { elementRef, isVisible } = useScrollAnimation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Form data:', form.current);

        emailjs.sendForm(
            'service_n445yzt',
            'template_68bbsui',
            form.current,
            'oUy1kS6eV1QsjyrQ7'
        ).then(
            (result) => {
                console.log('EmailJS response:', result);
                alert('Message sent successfully!');
                e.target.reset();
            },
            (error) => {
                console.error('EmailJS error:', error);
                alert(`Failed to send the message: ${error.text || error.message || 'Unknown error'}`);
            }
        );
    };

    return (
        <section id="contact" className="contact">
            <div className={`container fade-up ${isVisible ? 'show' : ''}`} ref={elementRef}>


                <div className="contact-container">
                    <div className="contact-options">
                        <article className="contact-option">
                            <div className="contact-option-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <h4>Email</h4>
                            <h5>senthamizh252@gmail.com</h5>
                            <a href="mailto:senthamizh252@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="4" placeholder="Your message" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
