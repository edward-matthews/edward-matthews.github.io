import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Props {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

const ContactModal: React.FC<Props> = ({ modalOpen, setModalOpen }: Props) => {
    const [displayContactForm, setDisplayContactForm] = useState(false);

    // const contactFormActionAttribute =
    //     'https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec';

    function handleClick(destination: string) {
        window.location.href = destination;
    }

    return (
        <>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {displayContactForm ? (
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We&apos;ll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => setDisplayContactForm(false)}>
                                Submit
                            </Button>
                        </Form>
                    ) : (
                        <Table borderless hover>
                            <tbody>
                                <tr onClick={() => setDisplayContactForm(true)} style={{ textDecorationColor: 'red' }}>
                                    <td>
                                        <i className="bi bi-envelope-fill"></i>
                                    </td>
                                    <td className="willItHover">Email</td>
                                </tr>
                                <tr
                                    onClick={() => handleClick('https://github.com/edward-matthews')}
                                    style={{ textDecorationColor: '#24292e' }}
                                >
                                    <td>
                                        <i className="bi bi-github"></i>
                                    </td>

                                    <td>GitHub</td>
                                </tr>
                                <tr
                                    onClick={() => handleClick('https://www.google.com/search?q=linkedin')}
                                    style={{ textDecorationColor: '#2867B2' }}
                                >
                                    <td>
                                        <i className="bi bi-linkedin"></i>
                                    </td>

                                    <td>LinkedIn</td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactModal;
