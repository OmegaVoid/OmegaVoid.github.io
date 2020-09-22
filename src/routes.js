import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Projects from './Projects';
import OmegaRogue from './OmegaRogue';
import Others from './Others';
import Omega from './Omega';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/some/where" component={SomePage} />
        <Route path="/some/otherpage" component={SomeOtherPage} />
    </Route>
);