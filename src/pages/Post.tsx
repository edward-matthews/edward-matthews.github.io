import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';

import matter from 'gray-matter';

import Markdown from '../components/Markdown';
import MetaTags from '../components/MetaTags';

type PostParams = {
    slug: string;
};

interface Frontmatter {
    title: string;
    thumbnail: string;
    banner: string;
    seoTitle: string;
    description: string;
    isPublished: boolean;
    publishedOn: string;
}

interface Props {
    slug?: string;
    preview?: boolean;
}

const Post: React.FC<Props> = (props: Props) => {
    let slug = props.slug;
    if (slug === undefined) {
        slug = useParams<PostParams>().slug;
    }

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
            {postFrontmatter && postFrontmatter.isPublished && (
                <MetaTags
                    title={postFrontmatter.seoTitle}
                    description={postFrontmatter.description}
                    thumbnail={postFrontmatter.thumbnail}
                    url={`/articles/${slug}`}
                />
            )}
            {postFrontmatter && postFrontmatter.isPublished && (
                <div>
                    <h1>{postFrontmatter.title}</h1>
                    <small>{postFrontmatter.publishedOn}</small>
                    <img src={postFrontmatter.banner} width="100%" />
                    <Markdown>{postContent}</Markdown>
                </div>
            )}
        </>
    );
};

export default Post;
