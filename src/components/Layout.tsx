import React, { useState } from 'react';
import MainBanner from './MainBanner';
import Container from 'react-bootstrap/Container';
import FloatingButton from '../components/FloatingButton';
import ContactModal from './ContactModal';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [floatingButtonVisible, setFloatingButtonVisible] = useState(false);
    return (
        <>
            <MainBanner modalControl={setModalOpen} menuShift={setFloatingButtonVisible} />
            <Container id="contentDiv">{children}</Container>
            <FloatingButton modalControl={setModalOpen} buttonVisibility={floatingButtonVisible} />
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default Layout;
