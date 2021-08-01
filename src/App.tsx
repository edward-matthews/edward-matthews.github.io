import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Content from './components/Content';

// import { createActionAuth } from '@octokit/auth-action';

// const auth = createActionAuth();
// const octokitAlternative = auth().then(
//     (res) =>
//         new Octokit({
//             auth: res,
//             userAgent: 'edward-matthews.github.io v1.0.0',
//         }),
// );

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
