import React, { useState } from 'react';

import FloatingItems from './FloatingItems';

const FloatingButton: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

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
