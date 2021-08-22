import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
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
    published: boolean;
    publishedOn: string;
    tags: string[];
}

const Post: React.FC = () => {
    const slug = useParams<PostParams>().slug;

    const [postContent, setPostContent] = useState('');
    const [postFrontmatter, setPostFrontmatter] = useState<Frontmatter>();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        import(`!babel-loader!@mdx-js/loader!../posts/${slug}.mdx`)
            .then((m) => [setPostContent(m.default), setPostFrontmatter(m.metadata as Frontmatter)])
            .catch(() => setHasError(true));
    }, []);

    return (
        <>
            {hasError && <Redirect to="/404" />}
            {postFrontmatter && (
                <MetaTags
                    title={`${postFrontmatter.title} | EdwardMatthe.ws`}
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
                            href={`https://github.com/edward-matthews/edward-matthews.github.io/edit/main/src/posts/${slug}.mdx`}
                        >
                            <i style={{ fontSize: '14px', display: 'inline' }} className="bi bi-github">
                                {' '}
                                Edit on GitHub
                            </i>
                        </a>
                    </small>
                    <img src={postFrontmatter.banner} width="100%" />
                    {postContent}
                    <div className="tags">
                        {postFrontmatter.tags.map((tag, idx) => {
                            return (
                                <Link to={`/articles?tags=${tag}`} key={idx}>
                                    <mark style={{ display: 'inline-block', margin: '0.25em', marginBottom: '2em' }}>
                                        #{tag}
                                    </mark>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Post;
