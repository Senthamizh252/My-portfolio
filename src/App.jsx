import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import './styles/style.css';

function App() {
    return (
        <Router>
            <div className="App">
                <SpaceBackground />
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:projectId" element={<ProjectDetails />} />
                        <Route path="/certificate" element={<Certificate />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
