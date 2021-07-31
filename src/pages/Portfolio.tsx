import React from 'react';
import CardDisplay from '../components/CardDisplay';
import Row from 'react-bootstrap/Row';

interface ICardProp {
    title: string;
    text: string;
    updated: string;
}

const CardsArray: ICardProp[] = [
    {
        title: 'Hello',
        text: 'This is the text',
        updated: '14 mins',
    },
];

const Portfolio: React.FC = () => {
    return (
        <Row className="g-0">
            {CardsArray.map((props, idx) => (
                <CardDisplay {...props} key={idx} />
            ))}
        </Row>
    );
};

export default Portfolio;
