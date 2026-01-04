// Authentication routes
// Responsibility:
// - Map URLs to controller functions
// - No logic, no DB access

const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth.controller");

// Create new user account
router.post("/signup", signup);
// Authenticate user and issue JWT
router.post("/login", login);

module.exports = router;
