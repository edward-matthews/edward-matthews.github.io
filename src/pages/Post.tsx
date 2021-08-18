import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import matter from 'gray-matter';

import Markdown from '../components/Markdown';
import MetaTags from '../components/MetaTags';

type PostParams = {
    slug: string;
};

interface Frontmatter {
    title: string;
    slug: string;
    thumbnail: string;
    banner: string;
    description: string;
    publishedOn: string;
    tags: string[];
}

const Post: React.FC = () => {
    const slug = useParams<PostParams>().slug;

    const [postContent, setPostContent] = useState('');
    const [postFrontmatter, setPostFrontmatter] = useState<Frontmatter>();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        import(`../posts/${slug}.md`)
            .then((post) => fetch(post.default))
            .then((response) => response.text())
            .then((text) => matter(text))
            .then((gm) => [setPostContent(gm.content), setPostFrontmatter(gm.data as Frontmatter)])
            .catch(() => setHasError(true));
    }, []);
    return (
        <>
            {hasError && <Redirect to="/404" />}
            {postFrontmatter && (
                <MetaTags
                    title={postFrontmatter.title}
                    description={postFrontmatter.description}
                    thumbnail={postFrontmatter.thumbnail}
                    url={`/articles/${slug}`}
                />
            )}
            {postFrontmatter && (
                <div>
                    <h1>{postFrontmatter.title}</h1>
                    <small>
                        {moment(postFrontmatter.publishedOn).format('MMMM Do, YYYY')}

                        <a
                            className="externalLink"
                            href={`https://github.com/edward-matthews/edward-matthews.github.io/edit/main/src/posts/${slug}.md`}
                        >
                            <i style={{ fontSize: '14px', display: 'inline' }} className="bi bi-github">
                                {' '}
                                Edit on GitHub
                            </i>
                        </a>
                    </small>
                    <img src={postFrontmatter.banner} width="100%" />
                    <Markdown>{postContent}</Markdown>
                </div>
            )}
        </>
    );
};

export default Post;
