import React from 'react';
import { useState, useEffect } from 'react';
import CardDisplay from '../components/CardDisplay';
import CardGroup from 'react-bootstrap/CardGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Octokit } from 'octokit';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

const Portfolio: React.FC = () => {
    const octokit = new Octokit({
        userAgent: 'edward-matthews.github.io v1.0.0',
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
            .then(() => Promise.all(promises).then((res) => setRepositories(res)))
            .catch((err) => console.log(err));
    }, []);
    const languages = repositories.map((repo) => repo.data.language).filter((x): x is string => x !== null);
    const [languageSelect, setLanguageSelect] = useState<string>('all');
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setLanguageSelect(e.target.value);
    }

    return (
        <>
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
            <CardGroup>
                {repositories.map((repo) => {
                    return languageSelect === repo.data.language || languageSelect === 'all' ? (
                        <CardDisplay {...repo.data} key={repo.data.id} />
                    ) : null;
                })}
            </CardGroup>
        </>
    );
};

export default Portfolio;
