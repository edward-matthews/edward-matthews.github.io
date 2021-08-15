import React from 'react';
import { useState, useEffect } from 'react';
import CardDisplay from '../components/CardDisplay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import { Octokit } from 'octokit';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';
import MetaTags from '../components/MetaTags';

const Portfolio: React.FC = () => {
    const [projectsAcquired, setProjectsAcquired] = useState(false);
    const octokit = new Octokit({
        userAgent: 'edwardmatthe.ws v1.0.0',
    });
    type GetRepositoryResponseType = GetResponseTypeFromEndpointMethod<typeof octokit.rest.repos.get>;
    const [repositories, setRepositories] = useState<GetRepositoryResponseType[]>([]);
    useEffect(() => {
        const promises: Promise<GetRepositoryResponseType>[] = [];
        octokit.rest.repos
            .listForUser({ username: 'edward-matthews', sort: 'updated' })
            .then((res) => res.data)
            .then((data) =>
                data.forEach((repository) =>
                    promises.push(octokit.rest.repos.get({ owner: 'edward-matthews', repo: repository.name })),
                ),
            )
            .then(() =>
                Promise.all(promises)
                    .then((res) => setRepositories(res))
                    .then(() => setProjectsAcquired(true)),
            )
            .catch((err) => console.log(err));
    }, []);
    const languages = Array.from(
        new Set(repositories.map((repo) => repo.data.language).filter((x): x is string => x !== null)),
    );
    const [languageSelect, setLanguageSelect] = useState<string>('all');
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setLanguageSelect(e.target.value);
    }

    return (
        <>
            <MetaTags
                title="Portfolio"
                description="All of the repositories found at github.com/edward-matthews pulled in dynamically from the GitHub API. Filter by language and be sure to check those with an 'Updated Recently!' badge to see the what's keeping my attention right now."
                thumbnail=""
                url="/portfolio"
            />
            <FloatingLabel controlId="floatingSelect" label="Languages">
                <Form.Select aria-label="Language Select" onChange={handleChange} defaultValue="all">
                    <option value="all">All</option>
                    {languages.map((language, idx) => (
                        <option value={language} key={idx}>
                            {language}
                        </option>
                    ))}
                </Form.Select>
            </FloatingLabel>
            {projectsAcquired ? (
                <Row xs={1} md={2} lg={3} className="g-0 align-items-stretch d-flex">
                    {repositories.map((repo) => {
                        return languageSelect === repo.data.language || languageSelect === 'all' ? (
                            <Col key={repo.data.id} className="my-2 g-2 align-items-stretch d-flex">
                                <CardDisplay {...repo.data} />{' '}
                            </Col>
                        ) : null;
                    })}
                </Row>
            ) : (
                <Spinner animation="border" role="status" className="d-flex mx-auto mt-2">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </>
    );
};

export default Portfolio;
