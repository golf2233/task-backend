// Authentication middleware
// Responsibility:
// - Validate JWT token
// - Extract user identity
// - Block unauthenticated requests

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // Token is expected in Authorization header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verify token signature and expiry
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach authenticated user identity to request
    req.userId = decoded.userId;
    // Allow request to continue
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = auth;

