const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {

  const comment =
    await Comment.create(req.body);

  res.json(comment);
};

exports.getComments = async (req, res) => {

  const comments =
    await Comment.find({
      taskId: req.params.taskId
    });

  res.json(comments);
};