import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import FloatingButton from '../components/FloatingButton';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <NavigationBar />
            <Container id="contentDiv">{children}</Container>
            <FloatingButton />
        </>
    );
};

export default Layout;
