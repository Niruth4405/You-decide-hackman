const jwt = require('jsonwebtoken'); // <-- This line is required!
const User = require('../models/user.model');

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // <-- jwt is now defined!
      req.user = await User.findById(decoded.userId).select("-password");
      if (!req.user) {
        return res.status(401).json({ message: "Not authorized, user not found" });
      }
      next();
    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    res.status(401).json({ message: "Token failed", error: error.message });
  }
};

module.exports = { protect };
