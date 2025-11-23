import React from 'react';
import '../styles/style.css';

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
                        <div className="skill-item" key={index}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar-container">
                                <div className="skill-bar" style={{ width: skill.percentage }}>
                                    <span className="skill-percentage">{skill.percentage}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
