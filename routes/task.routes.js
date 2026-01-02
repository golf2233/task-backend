const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getTasks,
  addTask,
} = require("../controllers/task.controller");

router.get("/tasks", auth, getTasks);
router.post("/tasks", auth, addTask);

module.exports = router;
