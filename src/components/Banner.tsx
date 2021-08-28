import React from 'react';

interface Props {
    src: string;
    fileExt: string;
    altText: string;
    credit?: string;
}

const Banner: React.FC<Props> = ({ src, fileExt, altText, credit }: Props) => {
    return (
        <div>
            <picture>
                <source srcSet={`/images/posts/${src}.webp`} type="image/webp" />
                <img src={`/images/posts/${src}.${fileExt}`} alt={altText} />
            </picture>
            {credit && <small className="mx-auto">{credit}</small>}
        </div>
    );
};

export default Banner;
