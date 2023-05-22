import React from 'react';
import './Banner.css';

interface Props {
    children?: React.ReactNode;
}

const Banner: React.FC<Props> = ({ children }) => {
    return (
        <div className="hero" style={{ backgroundImage: "url('/img/bank-tree.jpeg')" }}>
            {children ? <section className="hero-content">{children}</section> : null}
        </div>
    );
};

export default Banner;