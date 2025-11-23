import React from 'react';
import '../styles/style.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container text-center">
                <h2 className="section-title">CONTACT</h2>
                <p>Feel free to reach out to me for any inquiries or collaborations.</p>
                <div className="contact-links">
                    <a href="mailto:example@email.com" className="btn-contact">Email Me</a>
                    {/* Add more social links if needed */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
