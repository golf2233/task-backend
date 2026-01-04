// Entry point of the backend application
// Responsibility:
// - Load environment variables
// - Connect to database
// - Start HTTP server
// - NOTHING ELSE

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// Use platform-provided port in production (Render)
// Fallback to 3000 for local development
const PORT = process.env.PORT || 3000;

// Initialize database connection BEFORE accepting requests
connectDB();

// Start HTTP server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Debugging functions
app.get("/debug/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.delete("/debug/tasks", async (req, res) => {
  await Task.deleteMany({});
  res.json({ cleared: true });
});

