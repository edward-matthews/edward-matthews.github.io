import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import SocialMediaTable from './SocialMediaTable';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Props {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

const ContactModal: React.FC<Props> = ({ modalOpen, setModalOpen }: Props) => {
    const [displayContactForm, setDisplayContactForm] = useState(false);
    const [response, setResponse] = useState('');

    return (
        <>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {displayContactForm ? (
                        <ContactForm setDisplayContactForm={setDisplayContactForm} setResponse={setResponse} />
                    ) : (
                        <SocialMediaTable setDisplayContactForm={setDisplayContactForm} response={response} />
                    )}
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactModal;
