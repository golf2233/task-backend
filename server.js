require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//const connectDB = require("./config/db");

//const express = require("express");
//const cors = require("cors");
//const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

//const User = require("./models/User");
//const Task = require("./models/Task");


//const app = express();
//const PORT = process.env.PORT || 3000;

//connectDB();
//mongoose.connect("mongodb+srv://taskuser:taskpass123@cluster0.sba32k7.mongodb.net/?appName=Cluster0")
//  .then(() => console.log("MongoDB connected"))
//  .catch(err => console.log(err));

//app.use(cors());
//app.use(express.json());



//let tasks = [];

/*
app.get("/", (req, res) => {
  res.send("Server is running");
});
*/

/*
function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    //const decoded = jwt.verify(token, "SECRET_KEY");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // attach user identity to request
    next(); // allow API to continue
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
*/

/*
app.get("/tasks", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

app.post("/tasks", auth, async (req, res) => {
  const newTask = new Task({
    task: req.body.task,
    userId: req.userId,
  });

  await newTask.save();
  res.json({ success: true });
});
*/

/*
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  console.log("Signup:", email);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();
  res.json({ success: true });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email);

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Wrong password" });
  }

  //const token = jwt.sign({ userId: user._id },"SECRET_KEY",{ expiresIn: "1h" }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,{ expiresIn: "1h" }
  );

  res.json({ token });
});
*/

app.get("/debug/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.delete("/debug/tasks", async (req, res) => {
  await Task.deleteMany({});
  res.json({ cleared: true });
});



//app.listen(PORT, () => {
//  console.log("Server started on port " + PORT);
//});
