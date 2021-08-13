import React, { useState } from 'react';
import ContactModal from './ContactModal';
import Item from './Item';
import { useHistory } from 'react-router-dom';

const FloatingItems: React.FC = () => {
    const history = useHistory();
    const handleLink = (href: string) => {
        return () => {
            history.push(href);
        };
    };
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);

    return (
        <>
            <Item icon="bi-chat-text" clickHandler={openModal} pos={1} label="Contact" />
            <Item icon="bi-pen" clickHandler={handleLink('/articles')} pos={2} label="Articles" />
            <Item icon="bi-journal-code" clickHandler={handleLink('/portfolio')} pos={3} label="Portfolio" />
            <Item icon="bi-house" clickHandler={handleLink('/')} pos={4} label="Home" />
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default FloatingItems;
