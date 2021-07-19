const mongoose = require('mongoose');
const GuideSignupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    max: 32
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    max: 32
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true
  }
}, { timestamps: true })

module.exports = mongoose.models.GuideSignup || mongoose.model('GuideSignup', GuideSignupSchema)
