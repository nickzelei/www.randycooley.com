'use strict';
/* global __dirname */
const ProjectMeta = require('./models/project');
const path = require('path');
const Emailer = require('./emailer/emailer');
const mongoose = require('mongoose');

module.exports = appRoutes;

function appRoutes(app) {
  app.get('/api', baseApi);
  app.post('/api/contactus', contactUs);
  app.get('/api/projects', getProjects);
  app.get('/api/projects/:id', getProject);
  //app.post('/api/projects/add', addProject);
  //catch all to handle angular routes
  app.get('*', regularRoutes);

  function baseApi(req, res) {
      res.json({ message: 'Youve reached the API!'});
  }

  function contactUs(req, res) {
      const data = req.body || false;
      data.lvblnk = data.lvblnk || false;
      if (data && !data.lvblnk) {
        Emailer.sendMail(data, function(error, greatSuccess) {
          if (error) {
            //console.log(error);
          }
          res.json({ success: greatSuccess });
        });
      }
      else {
        //let spammers think it was a success
        res.json({ success: true });
      }
  }

  function getProjects(req, res) {
      ProjectMeta.find(function(err, data) {
        res.json(data);
      })
  }

  function getProject(req, res) {
     const projectId = req.params.id;
     //console.log(projectId);
     ProjectMeta.find({"_id": mongoose.Types.ObjectId(projectId)}, function(err, data) {
       //console.log(data);
       res.json(data);
     });
  }

  function addProject(req, res) {
    var request = req.body;
    request.createdDate = new Date();
    request.updatedDate = new Date();
    //console.log(request);
    var project = new ProjectMeta(request);
    //console.log(project);
    var message = "failed";

    project.save(function(err) {
      if (err) {
       console.log(err);
      }

      message = "success";
      console.log(message);
      res.json(message);
    });
  }

  function regularRoutes(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
  }
}
