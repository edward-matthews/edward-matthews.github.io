import React, { useState, useEffect } from 'react';

import FloatingItems from './FloatingItems';

const FloatingButton: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => setExpanded(false), { passive: true });
    }, []);

    return (
        <>
            <button className="floating-button" onClick={() => setExpanded(!expanded)}>
                {expanded ? <i className="bi bi-dash" /> : <i className="bi bi-plus" />}
            </button>
            {expanded && <FloatingItems />}
        </>
    );
};

export default FloatingButton;
