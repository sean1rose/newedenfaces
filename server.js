var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('babel-register');

var swig = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

// create express app
var app = express();

// set dev and deployment ports to listen to 
app.set('port', process.env.PORT || 3000);

// middleware time...
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res) => {
  Router.match({ routes: routes.default, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // on the client side, a rendered html markup is inserted into <div id="app"></div>
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      // on server side, a rendered html markup is sent to the index.html template where it is inserted into <div id="app">{{ html|sage }}</div> by swig template engine
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page not found');
    }
  });
});

// start server, listenin...
app.listen(app.get('port'), () => {
  console.log(`Server is litty at port ${app.get('port')}`);
})