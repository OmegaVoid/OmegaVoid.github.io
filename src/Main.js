import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Omega from './pages/Omega';
import OmegaRogue from './pages/OmegaRogue';
import Others from './pages/Others';
import Projects from './pages/Projects';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/#' component={Home}/>
            <Route exact path='/#/omega' component={Omega}/>
            <Route exact path='/#/omegarogue' component={OmegaRogue}/>
            <Route exact path='/#/others' component={Others}/>
            <Route exact path='/#/projects' component={Projects}/>
        </Switch>
    );
}

export default Main;