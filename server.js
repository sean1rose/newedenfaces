var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// create express app
var app = express();

// set dev and deployment ports to listen to 
app.set('port', process.env.PORT || 3000);

// middleware time...
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// start server, listenin...
app.listen(app.get('port'), () => {
  console.log(`Server is litty at port ${app.get('port')}`);
})