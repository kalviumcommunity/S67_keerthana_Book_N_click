const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'client' },
  profilePic: String,
  addresses: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
