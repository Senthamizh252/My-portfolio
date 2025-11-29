import React from 'react';
import '../styles/style.css';
import '../styles/certificate.css';
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
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fade-up, .zoom-in, .flip-in');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        // Combine tilt with existing transform if needed, but for simplicity we override
        // Note: This might conflict with floating animation if not handled carefully.
        // However, floating is an animation, transform is a property.
        // To mix them, we often need a wrapper. But let's try direct application first.
        // Actually, the floating animation uses `transform`. Setting `style.transform` will override the animation.
        // This is desired behavior: when hovering (tilting), we want full control.
        // When leaving, we clear the style, and the animation resumes (or resets).
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = (e) => {
        // Clear inline style to let CSS animation take over again
        e.currentTarget.style.transform = '';
    };

    return (
        <section id="certificate" className="certificate">
            <div className="container">
                <h2 className="section-title fade-up">CERTIFICATES</h2>
                <div className="projects-grid">
                    {certificatesData.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`project-card certificate-card flip-in delay-${(index % 3 + 1) * 100}`}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
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
