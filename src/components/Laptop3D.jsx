import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Laptop3D = ({ project, index }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const { elementRef, isVisible } = useScrollAnimation();
    const delayClass = `delay-${Math.min((index + 1) * 100, 600)}`;

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor position
        // Limit rotation to +/- 10 degrees for subtle effect
        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className={`laptop-scene fade-up ${delayClass} ${isVisible ? 'show' : ''}`}
            ref={elementRef}
        >
            <div
                className="laptop-wrapper"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                <div className="laptop-lid">
                    <div className="laptop-camera"></div>
                    <div className="laptop-screen">
                        <div className="project-content-overlay">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack-mini">
                                {project.technologies && project.technologies.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tech-dot" title={tech}></span>
                                ))}
                            </div>
                            <Link to={`/projects/${project.id}`} className="btn-laptop">
                                {project.buttonText || "View Project"}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="laptop-base">
                    <div className="laptop-trackpad"></div>
                </div>
            </div>
        </div>
    );
};

export default Laptop3D;
