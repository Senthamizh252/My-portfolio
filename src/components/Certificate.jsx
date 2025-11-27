import React from 'react';
import '../styles/style.css';

const Certificate = () => {
    return (
        <section id="certificate" className="certificate">
            <div className="container">
                <h2 className="section-title">CERTIFICATE</h2>
                <div className="certificate-content">
                    <p>My Certificates</p>
                    <a
                        href="https://drive.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-certificate"
                    >
                        VIEW CERTIFICATE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
