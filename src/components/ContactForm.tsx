import React from 'react';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface Props {
    setDisplayContactForm: (value: boolean) => void;
    setResponse: (value: string) => void;
}

const ContactForm: React.FC<Props> = ({ setDisplayContactForm, setResponse }: Props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [displayLeaving, setDisplayLeaving] = useState(false);

    async function handleFormSubmit() {
        const contactFormRequestHref =
            'https://script.google.com/macros/s/AKfycbxz6_KfLFeEtI5NKcJ5G72XGjttAi_2XE_kaisbulNRM9KIxAAxRSew1GNy6GiXyEI/exec';

        const query = `?name=${name}&message=${message}&email=${email}`;
        await fetch(contactFormRequestHref + query, {
            method: 'POST',
        });
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
            </Form.Group>
            <span
                onClick={() => setDisplayContactForm(false)}
                onMouseEnter={() => setDisplayLeaving(true)}
                onMouseLeave={() => setDisplayLeaving(false)}
            >
                <i className="bi bi-arrow-return-left unusual-link"></i>
            </span>
            {displayLeaving && <span> Won&apos;t you at least say &quot;Hi&quot;?</span>}
            <Button
                variant="primary"
                className="float-end"
                size="lg"
                onClick={() => [
                    handleFormSubmit(),
                    setResponse('Thanks for reaching out!'),
                    setDisplayContactForm(false),
                ]}
            >
                Send
            </Button>
        </Form>
    );
};

export default ContactForm;
