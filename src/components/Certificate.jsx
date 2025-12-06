import React from 'react';
import '../styles/style.css';
import { certificatesData } from '../data/certificatesData';
import pledgeImg from '../assets/images/pledge.png';
import nxtwaveImg from '../assets/images/nxtwave.png';
import srishtiImg from '../assets/images/srishti.png';

const imageMap = {
    cert1: pledgeImg,
    cert2: nxtwaveImg,
    cert3: srishtiImg,
};

const Certificate = () => {
    return (
        <section id="certificate" className="certificate">
            <div className="container">

                <div className="projects-grid">
                    {certificatesData.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="certificate-card"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="certificate-image-wrapper">
                                <img src={imageMap[cert.id]} alt={cert.title} className="certificate-image" />
                            </div>
                            <div className="certificate-info">
                                <h3 className="certificate-title">{cert.title}</h3>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-certificate-view"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;
