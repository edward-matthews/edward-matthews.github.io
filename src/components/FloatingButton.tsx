import React, { useState } from 'react';

import FloatingItems from './FloatingItems';

const FloatingButton: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`floating-options ${expanded && 'open'}`}>
            <button className="floating-button" onClick={() => setExpanded(!expanded)}>
                {expanded ? <i className="bi bi-dash" /> : <i className="bi bi-plus" />}
            </button>
            {expanded && <FloatingItems />}
        </div>
    );
};

export default FloatingButton;
