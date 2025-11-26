import React from 'react';
import '../styles/style.css';
import aboutImage from '../assets/images/about-cse.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
    const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();

    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-title-mobile">
                    <h2>ABOUT</h2>
                </div>
                <div className={`about-image slide-left ${imageVisible ? 'show' : ''}`} ref={imageRef}>
                    <img src={aboutImage} alt="About Me" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc'; e.target.parentNode.style.height = '300px' }} />
                </div>
                <div className={`about-text slide-right ${textVisible ? 'show' : ''}`} ref={textRef}>
                    <h2 className="about-title-desktop">ABOUT</h2>

                </div>
            </div>
        </section>
    );
};

export default About;
