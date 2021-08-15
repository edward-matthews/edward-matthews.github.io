import React from 'react';
import Helmet from 'react-helmet';

interface Props {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
}

const MetaTags: React.FC<Props> = ({ title, description, thumbnail, url }: Props) => {
    return (
        <Helmet>
            <title>Edward Matthews | {title}</title>
            <meta name="description" content={description} />

            <meta itemProp="name" content="Edward Matthews" />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={thumbnail} />

            <meta property="og:url" content={`https://edwardmatthe.ws/${url}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`Edward Matthews | ${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnail} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`Edward Matthews | ${title}`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={thumbnail} />
        </Helmet>
    );
};

export default MetaTags;
