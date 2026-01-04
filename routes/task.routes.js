// Task routes
// Responsibility:
// - Protect routes with auth middleware
// - Map URLs to task controllers

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getTasks,
  addTask,
} = require("../controllers/task.controller");

// Fetch tasks for logged-in user
router.get("/tasks", auth, getTasks);
// Add a new task for logged-in user
router.post("/tasks", auth, addTask);

module.exports = router;
