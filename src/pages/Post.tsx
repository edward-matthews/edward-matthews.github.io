import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import matter from 'gray-matter';

import Markdown from '../components/Markdown';
import Unknown from './Unknown';

type PostParams = {
    slug: string;
};

interface Frontmatter {
    title: string;
    thumbnail: string;
    banner: string;
    seoTitle: string;
    abstract: string;
    isPublished: boolean;
    publishedOn: string;
}

const Post: React.FC = () => {
    const { slug } = useParams<PostParams>();
    const [postContent, setPostContent] = useState('');
    const [postFrontmatter, setPostFrontmatter] = useState<Frontmatter>();

    useEffect(() => {
        import(`../posts/${slug}.md`)
            .then((post) => fetch(post.default))
            .then((response) => response.text())
            .then((text) => matter(text))
            .then((gm) => [setPostContent(gm.content), setPostFrontmatter(gm.data as Frontmatter)])
            .catch(() => console.error(`No post found with id ${slug}.`));
    }, []);
    return (
        <>
            {postFrontmatter && postFrontmatter.isPublished ? (
                <div className="content">
                    <h1 className="mx-auto">{postFrontmatter.title}</h1>
                    <small className="ms-auto">{postFrontmatter.publishedOn}</small>
                    <img src={postFrontmatter.banner} width="100%" />
                    <Markdown>{postContent}</Markdown>
                </div>
            ) : (
                <Unknown />
            )}
        </>
    );
};

export default Post;
