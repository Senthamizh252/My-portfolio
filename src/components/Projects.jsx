import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/projects.css';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
    const { elementRef, isVisible } = useScrollAnimation();
    const [activeFilter, setActiveFilter] = useState('all');

    // Get unique categories from projects
    const categories = ['all', ...new Set(projectsData.map(p => p.category).filter(Boolean))];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className={`container ${isVisible ? 'show' : ''}`} ref={elementRef}>
                <div className="projects-header">
                    <h2 className="projects-title">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className="projects-subtitle">
                        Showcasing my work in web development, data analytics, and design
                    </p>
                </div>

                {categories.length > 1 && (
                    <div className="projects-filters">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                )}

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card-wrapper"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
