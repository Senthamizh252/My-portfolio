import React from 'react';
import '../styles/style.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SkillItem = ({ skill, index }) => {
    const { elementRef, isVisible } = useScrollAnimation();
    const delayClass = `delay-${Math.min((index + 1) * 100, 600)}`;

    return (
        <div
            className={`skill-item fade-up ${delayClass} ${isVisible ? 'show' : ''}`}
            ref={elementRef}
        >
            <div className="skill-name">
                {skill.logos.map((logo, i) => (
                    <img key={i} src={logo} alt="skill logo" className="skill-logo" />
                ))}
            </div>
            <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: skill.percentage }}></div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        {
            name: 'HTML/CSS',
            logos: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            ],
            percentage: '95%'
        },
        {
            name: 'REACT.js',
            logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
            percentage: '45%'
        },
        {
            name: 'PYTHON',
            logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
            percentage: '55%'
        },
        {
            name: 'JAVA',
            logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
            percentage: '35%'
        },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
