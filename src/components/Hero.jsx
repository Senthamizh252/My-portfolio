import React, { useState, useEffect } from 'react';
import heroImage from '../assets/images/Senthamizh.jpg';
import '../styles/hero.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
    const { elementRef, isVisible } = useScrollAnimation();
    const [typedText, setTypedText] = useState('');
    const fullText = "Hi, I'm Senthamizh";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/Senthamizh252',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/senthamizh-m-a6a677289/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        {
            name: 'Email',
            url: 'mailto:senthamizh252@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            )
        }
    ];

    const skills = ['Data Analytics', 'Problem Solving', 'UI/UX Design', 'Full Stack'];

    return (
        <section id="home" className="hero">
            <div className={`container hero-container ${isVisible ? 'show' : ''}`} ref={elementRef}>
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Available for opportunities</span>
                        </div>

                        <h1 className="hero-title">
                            {typedText}
                            <span className="cursor-blink">|</span>
                        </h1>

                        <h2 className="hero-subtitle">
                            <span className="gradient-text">Data Analytics Enthusiast</span> &
                            <span className="gradient-text"> Full Stack Developer</span>
                        </h2>

                        <p className="hero-description">
                            A 2nd-year CSE student passionate about <strong>data analytics</strong>, problem-solving, and design.
                            I enjoy finding patterns in data and turning them into meaningful insights.
                            I love exploring new tools, UI trends, and ideas that help me grow in tech and analytics.
                        </p>

                        <div className="hero-skills">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-badge" style={{ animationDelay: `${index * 0.1}s` }}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="hero-cta">
                            <a href="#contact" className="btn-primary">
                                <span>Get In Touch</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <a href="/resume" className="btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span>Download CV</span>
                            </a>
                        </div>

                        <div className="hero-social">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="image-wrapper">
                            <div className="image-glow"></div>
                            <img src={heroImage} alt="Senthamizh" onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.style.backgroundColor = '#ccc'
                            }} />
                            <div className="image-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
