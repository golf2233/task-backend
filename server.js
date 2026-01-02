require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

connectDB();

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

