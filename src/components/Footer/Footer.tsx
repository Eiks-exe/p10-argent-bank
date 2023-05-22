import React from 'react';
import './Footer.css';

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    );
};

export default Footer;