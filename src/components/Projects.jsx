import React from 'react';
import '../styles/style.css';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
