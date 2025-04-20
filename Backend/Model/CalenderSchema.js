const mongoose = require('mongoose')

const calendarSchema = new mongoose.Schema({
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
    unavailableDates: [Date], // or you can store booked slots
  });
  
  module.exports = mongoose.model('Calendar', calendarSchema);
  