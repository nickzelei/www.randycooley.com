'use strict';

var nodemailer = require('nodemailer');

module.exports = {
	sendMail: function(callback) {
		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
		        user: 'nickzelei@gmail.com',
		        pass: 'qgoflljyzovsecrt'
	    }
		});

		var message = {
			from: 'nickzelei@gmail.com',
			to: 'nickzelei@gmail.com',
			subject: 'This is a test email',
			text: 'Hello world!'
		};

		transporter.sendMail(message, function(error, info) {
			if (error) {
				console.log('Error occurred');
				console.log(error);
				console.log(error.message);
				if (callback)
					callback(error.message, false);
				return;
			}

			console.log('Message success!');
			console.log(info);
			console.log('Server responded with "%s"', info.response);

			if (callback)
				callback(null, true);
		});
	}
};