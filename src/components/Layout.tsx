import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <NavigationBar />
            <Container id="contentDiv">{children}</Container>
        </>
    );
};

export default Layout;
