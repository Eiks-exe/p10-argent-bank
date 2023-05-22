import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useAuthentificate, useProfile } from 'features/user/UserSlice';
import './AppHeader.css';

interface Props {
    title: string;
    logoSrc: string;
    logoAlt?: string;
    logoHref?: string;
}

const AppHeader: React.FC<Props> = ({ title, logoSrc, logoAlt, logoHref }) => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href={logoHref}>
                <img className="main-nav-logo-image" src={logoSrc} alt={logoAlt} />
            </a>
            <div>
                <Link to="/login" className="main-nav-item" >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default AppHeader;