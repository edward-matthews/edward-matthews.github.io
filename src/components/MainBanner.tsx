import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner: React.FC = () => {
    return (
        <header>
            <Link to="/">
                <picture>
                    <source srcSet="/logo.webp" type="image/webp" />
                    <img src="/logo.png" alt="A logo resembling a Japanese inkan stamp with the name えど" />
                </picture>
            </Link>
            <h1>Edward Matthews</h1>
        </header>
    );
};

export default MainBanner;
