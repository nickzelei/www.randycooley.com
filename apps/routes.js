//var Nerd = require('./models/nerd');
var path = require('path');
var Emailer = require('./emailer/emailer');

module.exports = function(app) {
  app.get('/api', function(req, res) {
      res.json({ message: 'Youve reached the API!'});
  });

  app.get('/api/contactus', function(req, res) {
      Emailer.sendMail(function(error, greatSuccess) {
        if (error) {
          //console.log(error);
        }

        res.json({ success: greatSuccess });
      });
  });

  //app.get('/api/nerds', function(req, res) {
  //  Nerd.find(function(err, nerds) {
//      if (err) {res.send(err);}

      //res.json(nerds);
    //});
  //});

  //catch all to handle angular routes
  app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
  });
};
