import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HelmetProvider } from 'react-helmet-async';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './components/CodeBlock';

const components = {
    code: CodeBlock,
};

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Layout>
                    <HelmetProvider>
                        <MDXProvider components={components}>
                            <Content />
                        </MDXProvider>
                    </HelmetProvider>
                </Layout>
            </Router>
        </>
    );
};

export default App;
