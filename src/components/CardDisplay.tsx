import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

interface Props {
    title: string;
    text: string;
    updated: string;
}

const CardDisplay: React.FC<Props> = (props: Props) => {
    return (
        <Col>
            <Card bg="secondary" text="dark" style={{ width: '18rem' }} className="m-2 g-2" border="dark">
                <Card.Img variant="top" src="https://via.placeholder.com/451x160" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated {props.updated} ago</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardDisplay;
