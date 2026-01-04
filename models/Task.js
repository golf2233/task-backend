// Task data model
// Responsibility:
// - Define task schema
// - Link tasks to users via userId

const mongoose = require("mongoose");

// Each task item shall contain the task name and the linked user id
const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
