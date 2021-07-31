import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <NavigationBar />
                <Layout>
                    <Content />
                </Layout>
            </Router>
        </>
    );
};

export default App;
