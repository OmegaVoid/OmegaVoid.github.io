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
            <Route path='/' component={Home}/>
            <Route path='/#' component={Home}/>
            <Route path='/#/omega' component={Omega}/>
            <Route path='/#/omegarogue' component={OmegaRogue}/>
            <Route path='/#/others' component={Others}/>
            <Route path='/#/projects' component={Projects}/>
        </Switch>
    );
}

export default Main;