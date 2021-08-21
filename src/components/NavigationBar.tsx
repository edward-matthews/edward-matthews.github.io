import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <header>
            <Link to="/">
                <img alt="" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />
            </Link>
            <h1>Edward Matthews</h1>
        </header>
    );
};

export default NavigationBar;
