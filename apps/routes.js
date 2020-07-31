'use strict';
/* global __dirname */
const ProjectMeta = require('./models/project');
const path = require('path');
const mongoose = require('mongoose');

module.exports = appRoutes;

function appRoutes(app) {
  app.get('/api/projects', getProjects);
  app.get('/api/projects/:id', getProject);
  //catch all to handle angular routes
  app.get('*', regularRoutes);

  function getProjects(req, res) {
    ProjectMeta.find(function (err, data) {
      res.json(data);
    })
  }

  function getProject(req, res) {
    const projectId = req.params.id;
    //console.log(projectId);
    ProjectMeta.find({ "_id": mongoose.Types.ObjectId(projectId) }, function (err, data) {
      //console.log(data);
      res.json(data);
    });
  }

  function regularRoutes(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
  }
}
