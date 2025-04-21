// models/Project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  photographer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photographer",
    required: true,
  },
  title: String,
  description: String,
  imageUrl: String, // stored from Cloudinary
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);

