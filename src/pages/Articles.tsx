import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

interface TagDict {
    [key: string]: number;
}

const Articles: React.FC = () => {
    function getSlugs(r: __WebpackModuleApi.RequireContext) {
        return r.keys();
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();

    const [articles, setArticles] = useState<Frontmatter[]>([]);
    const [articlesLoaded, setArticlesLoaded] = useState(false);
    const [queryTags, setQueryTags] = useState(query.getAll('tags'));
    const [allTags, setAllTags] = useState<TagDict>({});

    useEffect(() => {
        const slugs = getSlugs(require.context('../posts/', false, /\.(mdx)$/));
        slugs.map((slug) => {
            import(`!babel-loader!@mdx-js/loader!../posts/${slug.substring(2, slug.length)}`)
                .then((m) => m.metadata as Frontmatter)
                .then((fm) => {
                    [
                        setArticles((articles) => [...articles, fm]),
                        fm.tags.map((tag) => {
                            setAllTags((allTags) => ({
                                ...allTags,
                                [tag]: tag in allTags ? allTags[tag] + 1 : 1,
                            }));
                        }),
                    ];
                })
                .catch((err) => console.error(err));
        });
        setArticlesLoaded(true);
    }, []);

    const boxChecked = (qTag: string) => {
        const checkBox = document.getElementById(qTag) as HTMLInputElement;
        if (checkBox.checked) {
            if (!queryTags.includes(qTag)) {
                setQueryTags([...queryTags, qTag]);
            }
        } else {
            if (queryTags.includes(qTag)) {
                setQueryTags(queryTags.filter((q) => q !== qTag));
            }
        }
    };

    const alphabetize = (arr: string[]) => {
        return arr.sort((a, b) => {
            return allTags[b] - allTags[a];
        });
    };

    const sortByDate = (posts: Frontmatter[]) => {
        return posts.sort((a, b) => {
            return moment(b.publishedOn).diff(moment(a.publishedOn));
        });
    };

    return (
        <>
            <MetaTags
                title="Articles | EdwardMatthe.ws"
                description="All of my writings, primarily about Django and React, links to edit any article on GitHub if you find a mistake (oops!)."
                thumbnail="https://edwardmatthe.ws/logo.png"
                url="/articles"
            />
            <ul className="checkboxList">
                {alphabetize(Object.keys(allTags)).map((tag, idx) => {
                    return (
                        <li key={idx}>
                            <input
                                type="checkbox"
                                id={tag}
                                checked={queryTags.includes(tag)}
                                onClick={() => boxChecked(`${tag}`)}
                            />
                            {`${tag}(${allTags[tag]})`}
                        </li>
                    );
                })}
            </ul>

            {articlesLoaded ? (
                <Accordion defaultActiveKey="0">
                    {sortByDate(articles).map((fm, idx) => {
                        if (
                            fm.published &&
                            (fm.tags.some((tag) => queryTags.includes(tag)) || queryTags.length === 0)
                        ) {
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
