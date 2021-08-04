import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
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
                sticky="top"
                className="mb-2 py-4"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/" className="py-4">
                        Edward Matthews
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav">
                        {expanded ? <i className="bi bi-code-slash"></i> : <i className="bi bi-code"></i>}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)} className="mx-5 h4">
                                <i className="bi bi-person-square"> About</i>
                            </Nav.Link>
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
                            <Nav.Link
                                as={Link}
                                to="#"
                                onClick={() => [setExpanded(false), setModalOpen(true)]}
                                className="mx-5 me-auto"
                            >
                                <i className="bi bi-chat-text h4"> Contact</i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    );
};

export default NavigationBar;
