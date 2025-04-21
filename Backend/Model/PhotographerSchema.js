const photographerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    servicesOffered: [String], // like wedding, event, portraits etc
    location: String, 
    availability: [Date], // optional, or in Calendar schema
    bio: String,
    portfolio: [String], // URLs to images/videos
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Photographer', photographerSchema);
  