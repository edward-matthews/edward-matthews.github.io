import React, { useState, useEffect } from 'react';

import FloatingItems from './FloatingItems';
import ContactModal from './ContactModal';

const FloatingButton: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => setExpanded(false));
    }, []);

    return (
        <>
            <button className="floating-button" onClick={() => setExpanded(!expanded)}>
                {expanded ? (
                    <i className="bi bi-dash" style={{ bottom: '0px' }} />
                ) : (
                    <i className="bi bi-plus" style={{ bottom: '0px' }} />
                )}
            </button>
            {expanded && <FloatingItems expand={setExpanded} modalControl={setModalOpen} />}
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default FloatingButton;
