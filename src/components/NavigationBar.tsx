import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavigationBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

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
                            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
