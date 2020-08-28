const projectData = require('./project-data.json');

const projectMap = new Map();

for (const project of projectData) {
  projectMap.set(project._id, project);
}

exports = module.exports = { projectMap, projects: projectData };
