import React from 'react';
import '../styles/style.css';
import { FaReact, FaNodeJs, FaPython, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiFlutter, SiFirebase, SiGooglemaps, SiPostgresql, SiVuedotjs, SiDjango, SiStripe, SiPandas, SiScikitlearn } from 'react-icons/si';

const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
        case 'react': return <FaReact />;
        case 'node.js': return <FaNodeJs />;
        case 'python': return <FaPython />;
        case 'mongodb': return <SiMongodb />;
        case 'flutter': return <SiFlutter />;
        case 'firebase': return <SiFirebase />;
        case 'google maps api': return <SiGooglemaps />;
        case 'express': return <FaNodeJs />; // Using Node icon for Express as fallback
        case 'postgresql': return <SiPostgresql />;
        case 'vue.js': return <SiVuedotjs />;
        case 'django': return <SiDjango />;
        case 'stripe api': return <SiStripe />;
        case 'pandas': return <SiPandas />;
        case 'scikit-learn': return <SiScikitlearn />;
        case 'ai/ml': return <FaPython />; // Using Python icon for AI/ML as fallback
        default: return null;
    }
};

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
            </div>
            <div className="project-footer">
                <div className="project-tech-stack">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-icon" title={tech}>
                            {getTechIcon(tech)}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    {/* Prioritize liveLink, fallback to githubLink or driveLink if liveLink is '#' or empty */}
                    <a
                        href={project.liveLink && project.liveLink !== '#' ? project.liveLink : (project.githubLink || project.driveLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link"
                    >
                        Check Live Site <FaExternalLinkAlt className="link-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
