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
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: skill.percentage }}>
                    <span className="skill-percentage">{skill.percentage}</span>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: 'HTML/CSS', percentage: '95%' },
        { name: 'REACT.js', percentage: '45%' },
        { name: 'PYTHON', percentage: '55%' },
        { name: 'JAVA', percentage: '35%' },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">SKILLS</h2>
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
