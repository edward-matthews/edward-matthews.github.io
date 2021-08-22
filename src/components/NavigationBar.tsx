import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <header>
            <Link to="/">
                <picture>
                    <source srcSet="/logo.webp" type="image/webp" />
                    <img src="/logo.png" />
                </picture>
            </Link>
            <h1>Edward Matthews</h1>
        </header>
    );
};

export default NavigationBar;
