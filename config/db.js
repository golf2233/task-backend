const mongoose = require("mongoose");

//MongoDB url = mongodb+srv://taskuser:taskpass123@cluster0.sba32k7.mongodb.net/?appName=Cluster0

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
}

module.exports = connectDB;
