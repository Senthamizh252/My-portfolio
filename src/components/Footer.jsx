import React from 'react';
import '../styles/style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Senthamizh. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
