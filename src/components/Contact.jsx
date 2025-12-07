import React, { useRef, useState } from 'react';
import '../styles/style.css';
import '../styles/contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const contactOptions = [
    {
        id: 'email',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        ),
        title: 'Email',
        value: 'senthamizh252@gmail.com',
        link: 'mailto:senthamizh252@gmail.com',
        linkText: 'Send a message'
    },
    {
        id: 'linkedin',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        ),
        title: 'LinkedIn',
        value: 'Connect with me',
        link: 'https://www.linkedin.com/in/senthamizh-m-a6a677289/',
        linkText: 'View Profile'
    },
    {
        id: 'github',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        ),
        title: 'GitHub',
        value: '@Senthamizh252',
        link: 'https://github.com/Senthamizh252',
        linkText: 'View Projects'
    }
];

const Contact = () => {
    const { elementRef, isVisible } = useScrollAnimation();
    const form = useRef();
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        emailjs.sendForm(
            'service_n445yzt',
            'template_68bbsui',
            form.current,
            'oUy1kS6eV1QsjyrQ7'
        ).then(
            (result) => {
                console.log('EmailJS response:', result);
                setFormStatus({ type: 'success', message: '✓ Message sent successfully!' });
                setIsSubmitting(false);
                e.target.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setFormStatus({ type: '', message: '' });
                }, 5000);
            },
            (error) => {
                console.error('EmailJS error:', error);
                setFormStatus({
                    type: 'error',
                    message: `✗ Failed to send message. Please try again.`
                });
                setIsSubmitting(false);
            }
        );
    };

    return (
        <section id="contact" className="contact">
            <div className={`container fade-up ${isVisible ? 'show' : ''}`} ref={elementRef}>
                <div className="contact-header">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">Let's create something amazing together</p>
                </div>

                <div className="contact-container">
                    <div className="contact-options">
                        {contactOptions.map((option, index) => (
                            <article
                                key={option.id}
                                className="contact-option"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="contact-option-icon">
                                    {option.icon}
                                </div>
                                <h4>{option.title}</h4>
                                <h5>{option.value}</h5>
                                <a href={option.link} target="_blank" rel="noreferrer">
                                    {option.linkText}
                                </a>
                            </article>
                        ))}
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Your Message"
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        {formStatus.message && (
                            <div className={`form-status ${formStatus.type}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`btn-contact-submit ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
