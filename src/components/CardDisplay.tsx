import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from 'octokit';
import moment from 'moment';

const octokit = new Octokit({
    auth: process.env.REACT_APP_ACCESS_TOKEN,
    userAgent: 'edward-matthews.github.io v1.0.0',
});
type GetRepositoryResponseType = GetResponseDataTypeFromEndpointMethod<typeof octokit.rest.repos.get>;

function withinDays(date: string, period: number): boolean {
    const now = moment();
    const then = moment(date, moment.ISO_8601);
    const week = moment.duration(period, 'days');
    const duration = moment.duration(now.diff(then));

    return duration < week;
}

const CardDisplay: React.FC<GetRepositoryResponseType> = (repo) => {
    return (
        <Col>
            <Card bg="dark" text="light" style={{ width: '18rem' }} className="mt-2 mx-auto g-2 h-100" border="dark">
                <Card.Header style={{ height: '2.5rem' }}>
                    {withinDays(repo.created_at, 14) && (
                        <span>
                            <Badge pill bg="danger">
                                New!
                            </Badge>{' '}
                        </span>
                    )}
                    {withinDays(repo.updated_at, 7) && (
                        <Badge pill bg="warning">
                            Updated Recently!
                        </Badge>
                    )}
                </Card.Header>

                <Card.Body className="d-flex flex-column">
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Img src="https://via.placeholder.com/150" />
                    <Card.Text>{repo.description}</Card.Text>
                    <Button href={repo.html_url} variant="light" className="mt-auto">
                        View Code
                    </Button>
                </Card.Body>

                <Card.Footer className="text-muted text-end small">
                    Updated {moment(repo.updated_at, moment.ISO_8601).fromNow()}
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardDisplay;
