import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Car Sales Dashboard. All rights reserved.</p>
            <p>
                <a href="#contact">Contact Us</a> | <a href="#privacy">Privacy Policy</a>
            </p>
        </footer>
    );
};

export default Footer;
