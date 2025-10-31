const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const config = require("./config.json");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const path = require('path');
const web3 = require("./web3-methods");
const app = express();
const port = process.env.PORT || 5001;
//imports
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoute.js");
const clientRoutes = require("./routes/client");
const adminRoutes = require("./routes/admin");


//connect to db:
connectDB();

//middleware:
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// initialize web3
web3.initializeWeb3();

// health check
app.get("/", async (req, res) => {
  res.json({ message: "Success" });
});

//create user:
app.use("/api/auth", authRoutes);

// app routes
app.use("/client", clientRoutes);
app.use("/admin", adminRoutes);



app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
