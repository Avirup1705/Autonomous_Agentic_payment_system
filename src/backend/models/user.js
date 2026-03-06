const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // User identity
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  // WhatsApp number (optional for notifications)
  whatsapp: {
    type: String,
    unique: true,
    sparse: true,
    index: true
  },

  // User wallet / smart account address (optional, can be linked later)
  walletAddress: {
    type: String
  },

  // Hashed private key (optional, for agentic functionality)
  privateKeyHash: {
    type: String
  },

  // Optional future extensions
  role: {
    type: String,
    enum: ["user", "merchant", "admin"],
    default: "user"
  },

  isActive: {
    type: Boolean,
    default: true
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },

  lastLoginAt: {
    type: Date
  }
});

module.exports = mongoose.model("User", UserSchema);
