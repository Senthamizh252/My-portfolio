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
                <h2 className="section-title">CERTIFICATES</h2>
                <div className="projects-grid">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="project-card">
                            <img src={imageMap[cert.id]} alt={cert.title} className="certificate-image" />
                            <h3 className="project-title">{cert.title}</h3>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-github"
                            >
                                VIEW
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;
