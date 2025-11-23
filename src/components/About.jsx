import React from 'react';
import '../styles/style.css';
import aboutImage from '../assets/images/about-cse.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-title-mobile">
                    <h2>ABOUT</h2>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="About Me" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#ccc'; e.target.parentNode.style.height = '300px' }} />
                </div>
                <div className="about-text">
                    <h2 className="about-title-desktop">ABOUT</h2>
                    <p>
                        Hi, I’m Senthamizh, a 2nd-year CSE student passionate about <strong>data analytics</strong>, problem-solving, and design. I enjoy finding patterns in data and turning them into meaningful insights. I use tools like <strong>Figma, Canva, and Cursor</strong> while building my skills in programming, data analysis, and visualization. I love exploring new tools, UI trends, and ideas that help me grow in tech and analytics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
