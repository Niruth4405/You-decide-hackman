const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Ensure secret exists
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("ACCESS_TOKEN_SECRET is not defined in .env");
    }

    const accessToken = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "108h",
    });

    return res.status(201).json({
      error: false,
      user: { name: user._id, email: user.email },
      accessToken,
      message: "Account created successfully",
    });
  } catch (err) {
    console.error("Error in /create-account:", err);
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
      details: err.message,
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      error: false,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ error: true, message: 'Unauthorized: No user info.' });
  }
  // User is already loaded on req.user from middleware!
  return res.json({
    user: req.user,
    message: "",
  });
};



// ✅ Properly export all controller functions
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
