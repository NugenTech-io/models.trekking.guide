const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuideSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please add your first name !'],
    index: true
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, 'Please add your last name !'],
  },
  mobileNumber: {
    type: Number,
    min: [10, 'Must have 10 digits']
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  profie: {
    type: String
  },
  banner: {
    type: String
  },
  bio: {
    type: String
  },
  licenseNumber: {
    type: String,
    required: [true, 'Please add your license number !'],
  },
  regions: {
    type: String,
    required: [true, 'Please add your regions !'],
  },
  experience: {
    type: String,
    required: [true, 'Please add your experience !'],
  },
  language: {
    type: String,
    required: [true, 'Please add your language !'],
  }
}, { timestamps: true });
GuideSchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.Guide || mongoose.model('Guide', GuideSchema);
