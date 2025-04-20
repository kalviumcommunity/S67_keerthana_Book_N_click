const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
    rating: { type: Number, required: true },
    comment: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Review', reviewSchema);
  