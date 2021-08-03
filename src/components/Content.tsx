import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Unknown from '../pages/Unknown';
import Articles from '../pages/Articles';

const Content: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
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