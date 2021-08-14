import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Unknown from '../pages/Unknown';
import Articles from '../pages/Articles';
import Post from '../pages/Post';

const Content: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
            </Route>
            <Route path="/articles/:slug">
                <Post />
            </Route>
            <Route path="/articles">
                <Articles />
            </Route>
            <Route path="*">
                <Unknown />
            </Route>
        </Switch>
    );
};

export default Content;
