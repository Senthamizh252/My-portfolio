import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/style.css';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <Link to="/">~~Senthamizh~~</Link>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink></li>
                    <li><NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>EDUCATION</NavLink></li>
                    <li><NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>SKILLS</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>PROJECTS</NavLink></li>
                    <li><NavLink to="/certificate" className={({ isActive }) => (isActive ? 'active' : '')}>CERTIFICATE</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
