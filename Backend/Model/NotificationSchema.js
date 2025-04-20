const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
    amount: Number,
    status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
    transactionDate: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Payment', paymentSchema);
  