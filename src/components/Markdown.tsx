import React from 'react';
import { Marked } from '@ts-stack/markdown';

interface Props {
    children: string;
}

const Markdown: React.FC<Props> = ({ children }: Props) => {
    function createMarkup() {
        return { __html: Marked.parse(children) };
    }
    return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default Markdown;
