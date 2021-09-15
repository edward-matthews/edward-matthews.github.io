import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

interface Props {
    modalControl: (val: boolean) => void;
}

const MainBanner: React.FC<Props> = ({ modalControl }: Props) => {
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
            <Navbar variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="/portfolio">
                            <i className="bi bi-journal-code"></i> Portfolio
                        </Nav.Link>
                        <Nav.Link href="/articles">
                            <i className="bi bi-pen"></i> Articles
                        </Nav.Link>
                        <Nav.Link onClick={() => modalControl(true)}>
                            <i className="bi bi-chat-text"></i> Contact
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MainBanner;
