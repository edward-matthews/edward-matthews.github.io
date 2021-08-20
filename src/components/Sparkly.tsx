import React from 'react';

interface Props {
    children: string;
}

const Sparkly: React.FC<Props> = ({ children }: Props) => {
    return <div style={{ display: 'inline', color: 'tomato' }}>{children}</div>;
};

export default Sparkly;
