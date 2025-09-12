const mongoose = require('mongoose');// Import the mongoose library
const uniqueValidator = require('mongoose-unique-validator');// Import the uniqueValidator plugin

// Define the User schema with email and password fields
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Apply the uniqueValidator plugin to userSchema
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
