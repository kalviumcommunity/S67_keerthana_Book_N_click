const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer' },
  });
  
  module.exports = mongoose.model('Service', serviceSchema);
  