'use strict';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const process = require('process');

const ProjectMeta = require('./project-model');

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(express.static(__dirname + '../public'));

app.get('/api/projects', (_req, res) => {
    ProjectMeta.find(function (_err, data) {
        res.json(data);
    })
});
app.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    ProjectMeta.find({ "_id": mongoose.Types.ObjectId(projectId) }, function (_err, data) {
        res.json(data);
    });
});

//catch all to handle angular routes
const root = path.join(__dirname, '../public/views/');
app.get('*', (_req, res) => res.sendFile('index.html', { root }));

const port = process.env.PORT || 8081;
app.listen(port);

console.log('Listening on port', port);

exports = module.exports = app;
