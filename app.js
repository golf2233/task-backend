const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(taskRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
