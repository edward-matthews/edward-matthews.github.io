import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <header>
            <Link to="/">
                <img alt="" src="/inkan3.png" />
            </Link>
            <h1>Edward Matthews</h1>
        </header>
    );
};

export default NavigationBar;
