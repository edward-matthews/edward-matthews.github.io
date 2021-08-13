import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavigationBar: React.FC = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" className="mb-2 py-4">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="py-4 h4 mx-auto">
                        <img alt="" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Edward Matthews
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
