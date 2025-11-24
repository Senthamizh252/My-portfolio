import React from 'react';
import '../styles/style.css';

const Certificate = () => {
    return (
        <section id="certificate" className="certificate">
            <div className="container">
                <h2 className="section-title">CERTIFICATE</h2>
                <div className="certificate-content">
                    <p>You can add links to your certificates (Google Drive, PDF links, etc.) below.</p>
                    <ul className="certificate-list">
                        <li>
                            <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer" className="btn-download">VIEW CERTIFICATE</a>
                        </li>
                    </ul>
                    <p className="muted">Replace the example link above with your certificate's drive link.</p>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
