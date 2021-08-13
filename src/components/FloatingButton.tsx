import React, { useState } from 'react';
import ContactModal from './ContactModal';

const FloatingButton: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <button className="floating-menu" onClick={() => setModalOpen(true)}>
                <i className="bi bi-chat-text h4" />
            </button>
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default FloatingButton;
