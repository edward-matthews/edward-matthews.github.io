import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HelmetProvider } from 'react-helmet-async';
const App: React.FC = () => {
    return (
        <>
            <Router>
                <Layout>
                    <HelmetProvider>
                        <Content />
                    </HelmetProvider>
                </Layout>
            </Router>
        </>
    );
};

export default App;
