const Project = require("../models/Project");

exports.createProject = async (req, res) => {

  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    createdBy: req.user.id
  });

  res.json(project);
};

exports.getProjects = async (req, res) => {

  const projects = await Project.find();

  res.json(projects);
};