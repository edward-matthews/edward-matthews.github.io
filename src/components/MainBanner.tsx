import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner: React.FC = () => {
    return (
        <header>
            <div className="banner-container">
                <Link to="/">
                    <picture>
                        <source srcSet="/images/logo.webp" type="image/webp" />
                        <img src="/images/logo.png" alt="A logo resembling a Japanese inkan stamp with the name えど" />
                    </picture>
                </Link>
                <h1 className="banner-text">Edward Matthews</h1>
            </div>
        </header>
    );
};

export default MainBanner;
