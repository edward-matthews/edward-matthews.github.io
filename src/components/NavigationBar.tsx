import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ContactModal from './ContactModal';

const NavigationBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Navbar
                expanded={expanded}
                collapseOnSelect
                expand="lg"
                bg="primary"
                variant="dark"
                fixed="top"
                className="mb-2"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Edward Matthews
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" onClick={() => setExpanded(false)}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/articles" onClick={() => setExpanded(false)}>
                                Articles
                            </Nav.Link>
                            <Button variant="secondary" onClick={() => [setExpanded(false), setModalOpen(true)]}>
                                Contact
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default NavigationBar;
