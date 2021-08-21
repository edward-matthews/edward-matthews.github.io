import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';
import MetaTags from '../components/MetaTags';

interface Frontmatter {
    title: string;
    slug: string;
    thumbnail: string;
    banner: string;
    description: string;
    published: boolean;
    publishedOn: string;
    tags: string[];
}

const Articles: React.FC = () => {
    function getSlugs(r: __WebpackModuleApi.RequireContext) {
        return r.keys();
    }

    const [articles, setArticles] = useState<Frontmatter[]>([]);
    const [articlesLoaded, setArticlesLoaded] = useState(false);
    useEffect(() => {
        const slugs = getSlugs(require.context('../posts/', false, /\.(mdx)$/));
        slugs.map((slug) => {
            import(`!babel-loader!@mdx-js/loader!../posts/${slug.substring(2, slug.length)}`)
                .then((m) => setArticles([...articles, m.metadata as Frontmatter]))
                .catch((err) => console.error(err));
        });
        setArticlesLoaded(true);
    }, []);

    return (
        <>
            <MetaTags
                title="Articles"
                description="All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistake (oops!)."
                thumbnail=""
                url="/articles"
            />
            {articlesLoaded ? (
                <Accordion defaultActiveKey="0">
                    {articles.map((fm, idx) => {
                        if (fm.published) {
                            return (
                                <Accordion.Item key={idx} eventKey={String(idx)}>
                                    <Accordion.Header>
                                        <span className="me-auto">{fm.title}</span>
                                        <small className="ms-auto">
                                            {moment(fm.publishedOn).format('MMMM Do, YYYY')}
                                        </small>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {fm.description}
                                        <br />
                                        <Link to={`/articles/${fm.slug}`}>Read more...</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        }
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
