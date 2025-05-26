const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    password: String, //not required for google auth users
    provider: { type: String, default: 'email' }, // 'email' or 'google'
});

module.exports = mongoose.model('User', userSchema);