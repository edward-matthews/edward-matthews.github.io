import React from 'react';

interface Props {
    children: string;
}

const Caption: React.FC<Props> = ({ children }: Props) => {
    return <small className="figcaption">{children}</small>;
};

export default Caption;
