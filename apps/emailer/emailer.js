'use strict';

const nodemailer = require('nodemailer');

module.exports = {
	sendMail: function(data, callback) {
		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
		        user: 'nickzelei@gmail.com',
		        pass: 'qgoflljyzovsecrt'
	    }
		});
		
		let subject = "New Inquiry from: " + data.name;
		let text = "Name: " + data.name + "<br><br>" +
					"Phone: " + data.phone + "<br><br>" + 
					"Email: " + data.email + "<br><br>" + 
					"Message: " + data.message;

		let message = {
			from: 'nickzelei@gmail.com',
			to: 'nickzelei@gmail.com',
			subject: subject,
			html: text
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