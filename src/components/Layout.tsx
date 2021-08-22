import React from 'react';
import MainBanner from './MainBanner';
import Container from 'react-bootstrap/Container';
import FloatingButton from '../components/FloatingButton';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <MainBanner />
            <Container id="contentDiv">{children}</Container>
            <FloatingButton />
        </>
    );
};

export default Layout;
