const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
    date: Date,
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    eventType: String,
    location: String,
    message: String,
  });
  
  module.exports = mongoose.model('Booking', bookingSchema);
  