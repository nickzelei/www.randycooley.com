'use strict';

const express = require('express');
const path = require('path');
const process = require('process');

const { projectMap, projects } = require('./projects');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/projects', (_req, res) => {
    return res.json(projects);
});
app.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projectMap.get(projectId);
    if (!project) {
        return res.sendStatus(404);
    }
    return res.json([project]);
});

//catch all to handle angular routes
const root = path.join(__dirname, '../public/views/');
app.get('*', (_req, res) => res.sendFile('index.html', { root }));

const port = process.env.PORT || 8081;
app.listen(port);

console.log('Listening on port', port);

exports = module.exports = app;
