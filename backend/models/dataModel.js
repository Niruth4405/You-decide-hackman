const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      // Reference to existing User model
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    device: {
      type: String,
      required: true,
      trim: true,
    },
    eventType: {
      type: String,
      required: true,
      trim: true,
    },
    eventDescription: {
      type: String,
      required: true,
      trim: true,
    },
    eventSeverity: {
      type: String,
      enum: ["info", "warning", "critical"],
      required: true,
    },
    campLocation: {
      type: String,
      required: true,
      trim: true,
    },
    // Optional: ML risk score if you plan to store it later
    mlRiskScore: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;