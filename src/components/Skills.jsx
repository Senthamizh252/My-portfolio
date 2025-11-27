import React from 'react';
import '../styles/style.css';
import cppLogo from '../assets/images/cpp-logo.png';
import javaScriptLogo from '../assets/images/javascript-logo.png';
import nodejsLogo from '../assets/images/nodejs-logo.png';
import reactjsLogo from '../assets/images/reactjs-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import pythonLogo from '../assets/images/python-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import chromeLogo from '../assets/images/chrome-logo.png';
import vscodeLogo from '../assets/images/vscode-logo.png';

const Skills = () => {
    const professionalSkills = [
        { name: 'C++', logo: cppLogo },
        { name: 'JavaScript', logo: javaScriptLogo },
        { name: 'Node.js', logo: nodejsLogo },
        { name: 'React.js', logo: reactjsLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'Java', logo: javaLogo }
    ];

    const tools = [
        { name: 'Google Chrome', logo: chromeLogo },
        { name: 'VS Code', logo: vscodeLogo }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Professional Skillset</h2>
                <div className="skills-grid">
                    {professionalSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title">Tools I Use</h2>
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-item">
                            <img src={tool.logo} alt={`${tool.name} logo`} className="tool-logo" />
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
