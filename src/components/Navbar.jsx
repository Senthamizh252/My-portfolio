import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <Link to="/">~~Senthamizh~~</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
                    <li><Link to="/education" onClick={toggleMenu}>EDUCATION</Link></li>
                    <li><Link to="/skills" onClick={toggleMenu}>SKILLS</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>PROJECTS</Link></li>
                    <li><Link to="/certificate" onClick={toggleMenu}>CERTIFICATE</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
