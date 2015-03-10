/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var utils = require('./api/utils.js');
var express = require('express');

var apiRouter = express.Router();
var authRouter = express.Router();
require('./routes/authRoutes.js')(authRouter);


module.exports = function(app) {

  // Insert routes below
  app.use('/api/requestinvite', utils.requestInvite);
  app.use('/auth', authRouter);
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
