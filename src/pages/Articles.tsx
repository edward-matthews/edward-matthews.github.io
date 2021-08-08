import React from 'react';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';

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
    const [articles, setArticles] = useState<ArticleT[]>([]);
    const [articlesLoaded, setArticlesLoaded] = useState(false);
    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@edward-matthews')
            .then((resp) => resp.json())
            .then((blogs) => setArticles(blogs.items))
            .then(() => setArticlesLoaded(true));
    }, []);

    return (
        <>
            {articlesLoaded ? (
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
            )}
        </>
    );
};

export default Articles;
