// entry point
// URL listener that renders the app when it changes...

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// html5 history api allows us to transition b/w routes
let history = createBrowserHistory();

// React Router bootstraps the routes from routes.js, matches them against a url, and executes appropriate callback handler (renders a component to 'app' div)
  // url is matched according to path set in corresponding route in routes.js
  // {this.props.children} in main App component will render children components (home, etc)

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));