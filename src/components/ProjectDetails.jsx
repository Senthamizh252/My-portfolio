import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/style.css';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/projects" className="btn-download">Back to Projects</Link>
            </div>
        );
    }

    return (
        <section className="project-details" style={{ padding: '100px 0' }}>
            <div className="container">
                <Link to="/projects" style={{ display: 'inline-block', marginBottom: '20px', color: '#fff' }}>&larr; Back to Projects</Link>
                <div className={`project-card ${project.variant === 'gold' ? 'gold' : ''}`} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', alignItems: 'flex-start' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{project.title}</h1>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>{project.fullDescription}</p>

                    <h3 style={{ marginBottom: '15px' }}>Technologies Used:</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
                        {project.technologies.map((tech, index) => (
                            <li key={index} style={{ marginBottom: '5px' }}>{tech}</li>
                        ))}
                    </ul>

                    <button className="btn-download">{project.buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
