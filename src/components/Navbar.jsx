import React, { useState } from 'react';
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
                    <a href="#">~~Senthamizh~~</a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
                    <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>SKILLS</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
