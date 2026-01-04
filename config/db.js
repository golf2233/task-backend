// Centralized database connection logic
// Responsibility:
// - Connect to MongoDB
// - Fail fast if connection fails

const mongoose = require("mongoose");

//MongoDB url = mongodb+srv://taskuser:taskpass123@cluster0.sba32k7.mongodb.net/?appName=Cluster0 --> configured in the env MONGO_URL

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      // Stop the process if DB is unavailable
      process.exit(1);
    });
}

module.exports = connectDB;

