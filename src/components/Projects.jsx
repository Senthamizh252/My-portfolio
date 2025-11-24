import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project, index }) => {
    const { elementRef, isVisible } = useScrollAnimation();
    const delayClass = `delay-${Math.min((index + 1) * 100, 600)}`;

    return (
        <Link
            to={`/projects/${project.id}`}
            ref={elementRef}
            className={`project-card ${project.variant === 'gold' ? 'gold' : ''} zoom-in ${delayClass} ${isVisible ? 'show' : ''}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
                {project.technologies && project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                ))}
            </div>
            <button className="btn-download">{project.buttonText}</button>
        </Link>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
