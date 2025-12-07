import React from 'react';
import '../styles/style.css';

import { FaGithub, FaGoogleDrive, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiMongodb, SiPostgresql, SiDjango, SiPandas, SiScikitlearn, SiVite, SiExpress, SiStripe } from 'react-icons/si';

const getTechIcon = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('react')) return <FaReact />;
    if (name.includes('node')) return <FaNodeJs />;
    if (name.includes('python')) return <FaPython />;
    if (name.includes('mongo')) return <SiMongodb />;
    if (name.includes('flutter')) return <SiFlutter />;
    if (name.includes('firebase')) return <SiFirebase />;
    if (name.includes('postgres')) return <SiPostgresql />;
    if (name.includes('django')) return <SiDjango />;
    if (name.includes('pandas')) return <SiPandas />;
    if (name.includes('scikit')) return <SiScikitlearn />;
    if (name.includes('express')) return <SiExpress />;
    if (name.includes('stripe')) return <SiStripe />;
    if (name.includes('html')) return <FaHtml5 />;
    if (name.includes('css')) return <FaCss3Alt />;
    if (name.includes('js') || name.includes('javascript')) return <FaJs />;
    return <FaDatabase />; // Default icon
};

// Helper function to get the primary link for a project
const getPrimaryLink = (project) => {
    if (project.liveLink && project.liveLink !== '#') return project.liveLink;
    if (project.githubLink) return project.githubLink;
    if (project.driveLink) return project.driveLink;
    return '#';
};

const ProjectCard = ({ project }) => {
    const primaryLink = getPrimaryLink(project);

    return (
        <div className="project-card-modern">
            <div className="visit-badge">
                <a href={primaryLink} target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
            <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image-modern" />
            </div>
            <div className="project-content-modern">
                <h3 className="project-title-modern">{project.title}</h3>
                <p className="project-description-modern">{project.description}</p>

                <div className="project-footer-modern">
                    <div className="tech-stack-modern">
                        {project.technologies && project.technologies.map((tech, index) => (
                            <div key={index} className="tech-icon-modern" title={tech}>
                                {getTechIcon(tech)}
                            </div>
                        ))}
                    </div>

                    <div className="project-links-modern">
                        {project.liveLink && project.liveLink !== '#' ? (
                            <a href={project.liveLink} className="btn-live" target="_blank" rel="noopener noreferrer">
                                Check Live Site <FaExternalLinkAlt className="link-icon" />
                            </a>
                        ) : project.githubLink ? (
                            <a href={project.githubLink} className="btn-live" target="_blank" rel="noopener noreferrer">
                                Check Code <FaGithub className="link-icon" />
                            </a>
                        ) : project.driveLink ? (
                            <a href={project.driveLink} className="btn-live" target="_blank" rel="noopener noreferrer">
                                View Drive <FaGoogleDrive className="link-icon" />
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
