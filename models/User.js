// User data model
// Responsibility:
// - Define user schema
// - Enforce uniqueness and required fields

const mongoose = require("mongoose");

// - Each user data shall contain email and password
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
