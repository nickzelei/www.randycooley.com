var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    title: { type: String },
	projDate: { type: String, required: true },
	sortOrder: { type: Number },
	isEnabled: { type: Boolean },
    description: String,
    mainImage: {
        url: String,
        caption: String
    },
    addImages: [
        {
            url: String,
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