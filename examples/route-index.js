var   router = require('express').Router();
var handlers = require('./handlers');
var middlewares = require('./middlewares');
var utils    = require('mt1l');

utils.buildRoutes(handlers, middlewares, router);

module.exports = router;