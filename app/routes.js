// Router -> tells app which compoent to render at what route...

import React form 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);