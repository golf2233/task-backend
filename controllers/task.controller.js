// Task controller
// Responsibility:
// - Read/write task data
// - Enforce per-user data isolation

const Task = require("../models/Task");

// Fetch tasks belonging to authenticated user
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
};

// Add new task for authenticated user
exports.addTask = async (req, res) => {
  const task = new Task({
    task: req.body.task,
    userId: req.userId,
  });

  await task.save();
  res.json({ success: true });
};

