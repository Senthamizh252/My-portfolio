import React from 'react';
import '../styles/style.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card simple-list">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
                {project.githubLink && (
                    <a href={project.githubLink} className="text-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
                {project.driveLink && (
                    <a href={project.driveLink} className="text-link" target="_blank" rel="noopener noreferrer">
                        Drive
                    </a>
                )}
                {/* Fallback or additional live link if needed, but prioritizing the specific links shown in image */}
                {project.liveLink && project.liveLink !== '#' && !project.githubLink && !project.driveLink && (
                    <a href={project.liveLink} className="text-link" target="_blank" rel="noopener noreferrer">
                        Live Site
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
