import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Content />
                </Layout>
            </Router>
        </>
    );
};

export default App;
