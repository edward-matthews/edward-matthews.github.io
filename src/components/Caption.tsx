import React from 'react';

interface Props {
    children: string;
}

const Caption: React.FC<Props> = ({ children }: Props) => {
    return (
        <small style={{ display: 'flex', justifyContent: 'center' }} className="figcaption">
            {children}
        </small>
    );
};

export default Caption;
