import React from 'react';
import '../styles/style.css';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            {project.logo && (
                                <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
                            )}
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            {project.githubLink && (
                                <a href={project.githubLink} className="btn-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
