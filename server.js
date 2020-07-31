'use strict';
/* global process */
/* global __dirname */

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8081;

mongoose.connect(process.env.DB_URL);

app.use(express.static(__dirname + '/public'));

require('./apps/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
