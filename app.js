// Express application configuration
// Responsibility:
// - Register global middleware
// - Attach route modules
// - No business logic here

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

const app = express();

// Enable CORS so frontend can access backend
app.use(cors());
// Parse incoming JSON request bodies
app.use(express.json());

// Attach route modules
app.use(authRoutes);
app.use(taskRoutes);

// Health check / sanity endpoint
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;

