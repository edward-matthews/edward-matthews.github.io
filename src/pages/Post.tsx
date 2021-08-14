import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from '../components/Markdown';

type PostParams = {
    slug: string;
};

const Post: React.FC = () => {
    const { slug } = useParams<PostParams>();
    const [postMarkdown, setPostMarkdown] = useState('');

    useEffect(() => {
        import(`../posts/${slug}.md`)
            .then((post) => fetch(post.default))
            .then((response) => response.text())
            .then((text) => {
                setPostMarkdown(text);
            });
    }, []);
    return <Markdown>{postMarkdown}</Markdown>;
};

export default Post;
