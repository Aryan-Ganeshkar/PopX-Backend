const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  company: String,
  isAgency: Boolean,
});

module.exports = mongoose.model('User', userSchema);
