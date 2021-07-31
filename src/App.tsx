import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from 'octokit';
import { useState, useEffect } from 'react';

const octokit = new Octokit({
    auth: process.env.REACT_APP_ACCESS_TOKEN,
    userAgent: 'edward-matthews.github.io v1.0.0',
});
type GetRepositoryResponseType = GetResponseTypeFromEndpointMethod<typeof octokit.rest.repos.get>;

const App: React.FC = () => {
    const [repositories, setRepositories] = useState<GetRepositoryResponseType[]>([]);
    useEffect(() => {
        const promises: Promise<GetRepositoryResponseType>[] = [];
        octokit.rest.users
            .getAuthenticated()
            .then(() => octokit.rest.repos.listForAuthenticatedUser())
            .then((res) => res.data)
            .then((data) =>
                data.forEach((repository) =>
                    promises.push(octokit.rest.repos.get({ owner: 'edward-matthews', repo: repository.name })),
                ),
            )
            .then(() => Promise.all(promises).then((res) => setRepositories(res)));
    }, []);

    repositories.forEach((repo) => console.log(repo));

    return (
        <>
            <Router>
                <Layout>
                    {repositories.map((repo) => (
                        <li key={repo.data.id}>{repo.data.name}</li>
                    ))}
                    <Content />
                </Layout>
            </Router>
        </>
    );
};

export default App;
