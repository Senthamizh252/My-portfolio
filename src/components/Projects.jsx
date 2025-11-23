import React from 'react';
import '../styles/style.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">PROJECTS</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <h3>SKILLCONNECT</h3>
                        <p>
                            Advanced job filters enable precise matching by skill, location, pay range, experience, availability, and verified status.
                        </p>
                        <button className="btn-download">DOWNLOAD</button>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <h3>FASHIONISTA</h3>
                        <p>
                            Empowering every individual to design clothing that truly fits their identity. Connecting creators and boutiques through a trusted, scalable custom-fashion ecosystem.
                        </p>
                        <button className="btn-download">DOWNLOAD</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
