'use strict';
/* global process */
/* global __dirname */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const db = require('./config/db');
const port = process.env.PORT || 8081;

mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({ type:'application/vnd.api+json'}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

const router = express.Router();

require('./apps/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app; 	 	