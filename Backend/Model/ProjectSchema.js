const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
    title: String,
    description: String,
    media: [String], // Cloudinary image/video URLs
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Project', projectSchema);
  