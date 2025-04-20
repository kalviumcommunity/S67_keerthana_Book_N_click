const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    password: {
        type: String,
        required: true,
        minlength: 6,
   
      },
    
      role: {
        type: String,
        enum: ['client', 'photographer', 'admin'],
        default: 'client',
      },

})


module.exports = mongoose.model('User', UserSchema);