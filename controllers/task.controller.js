const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const task = new Task({
    task: req.body.task,
    userId: req.userId,
  });

  await task.save();
  res.json({ success: true });
};
