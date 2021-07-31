import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export default Layout;
