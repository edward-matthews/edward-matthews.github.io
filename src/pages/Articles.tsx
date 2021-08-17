import React from 'react';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';
import MetaTags from '../components/MetaTags';
import Post from './Post';

const Articles: React.FC = () => {
    type ArticleT = {
        author: string;
        categories: string[];
        content: string;
        description: string;
        enclosure: Record<string, unknown>;
        guid: string;
        link: string;
        pubDate: string;
        thumbnail: string;
        title: string;
    };
    function importAll(r: __WebpackModuleApi.RequireContext) {
        return r.keys();
    }

    const [articles, setArticles] = useState<string[]>([]);
    const [articlesLoaded, setArticlesLoaded] = useState(false);
    useEffect(() => {
        setArticles(importAll(require.context('../posts/', false, /\.(md)$/)));
        setArticlesLoaded(true);
    }, []);

    return (
        <>
            <MetaTags
                title="Articles"
                description="All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistakae (oops!)."
                thumbnail=""
                url="/articles"
            />
            {articles.map((postSlug, idx) => {
                return <Post key={idx} slug={postSlug.slice(2, -3)} preview={true} />;
            })}
            {/* {articlesLoaded ? (
                <Accordion defaultActiveKey="0" flush>
                    {articles.map((article, idx) => {
                        return (
                            <Accordion.Item key={idx} eventKey={String(idx)}>
                                <Accordion.Header>
                                    <span className="me-auto">{article.title}</span>
                                    <small className="ms-auto">
                                        {moment(article.pubDate).format('dddd, MMMM Do YYYY')}
                                    </small>
                                </Accordion.Header>
                                <Accordion.Body
                                    dangerouslySetInnerHTML={{ __html: article.description }}
                                ></Accordion.Body>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            ) : (
                <Spinner animation="border" role="status" className="d-flex mx-auto mt-2">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )} */}
        </>
    );
};

export default Articles;
