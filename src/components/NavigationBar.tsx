import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                sticky="top"
                className="mb-2 py-4"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/" className="py-4 h4">
                        <img alt="" src="/logo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Edward Matthews
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav">
                        {expanded ? <i className="bi bi-code-slash"></i> : <i className="bi bi-code"></i>}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ fontFamily: 'Comfortaa' }}>
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={NavLink}
                                to="/portfolio"
                                onClick={() => setExpanded(false)}
                                className="mx-5 h4"
                            >
                                <i className="bi bi-journal-code"> Portfolio</i>
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/articles"
                                onClick={() => setExpanded(false)}
                                className="mx-5 h4"
                            >
                                <i className="bi bi-pen"> Articles</i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
