import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

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
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
    );
};

export default Content;
