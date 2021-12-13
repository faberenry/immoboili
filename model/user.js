const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {type:String, require:true, unique:true},
    nome:String,
    cognome:String,
    email:String,
    numeroDiTelefono: Number,
    sospeso: Boolean,
    password:String,
    isModeratore: {type:Boolean, default:false}
  },
  { collection: 'users'}
); 

module.exports = mongoose.model('user', userSchema);