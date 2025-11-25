import React from 'react';
import '../styles/style.css';
import { projectsData } from '../data/projectsData';
import Laptop3D from './Laptop3D';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <Laptop3D key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
