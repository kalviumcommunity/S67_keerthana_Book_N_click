const mongoose = require('mongoose')


const PhotographerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    serviceOffered:[String],
    location:String,
    availability:[Date],
    bio: String,
  portfolio: [String], 
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },

  });
  
  module.exports = mongoose.model('Photographer', PhotographerSchema);
  