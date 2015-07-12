var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    images: [
        {
            image: String,
            caption: String
        }
    ],
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true}
});

projectSchema.pre('save', function(next) {
	var currentDate = new Date();
	
	this.updateDate = currentDate;

	if (!this.createdDate)
		this.createdDate = currentDate;

	next();
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;