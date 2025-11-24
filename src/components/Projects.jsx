import React from 'react';
import '../styles/style.css';

const projectsData = [
    {
        title: "HEALON",
        description: "Heal-On bridges the rural healthcare gap with AI-driven health assessments, virtual doctor support, and real-time medicine availability."
    },
    {
        title: "ROUTEMATE",
        description: "Routemate delivers instant bus tracking with live location, driver-conductor info, accurate arrivals, and delay notifications."
    },
    {
        title: "SKILLCONNECT",
        description: "Advanced job filters enable precise matching by skill, location, pay range, experience, availability, and verified status."
    },
    {
        title: "FASHIONISTA",
        description: "Empowering every individual to design clothing that truly fits their identity. Connecting creators and boutiques through a trusted, scalable custom-fashion ecosystem."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button className="btn-download">DOWNLOAD</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
