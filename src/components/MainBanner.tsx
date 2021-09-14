import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const MainBanner: React.FC = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <picture>
                        <source srcSet="/images/logo.webp" type="image/webp" />
                        <img src="/images/logo.png" alt="A logo resembling a Japanese inkan stamp with the name えど" />
                    </picture>
                </Link>
            </header>
            <Navbar bg="secondary" variant="light">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/articles">Articles</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MainBanner;
