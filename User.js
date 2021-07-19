const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, 'You must have a username !'],
    index: true
  },
  mobileNumber: {
    type: Number,
    min: [10, 'Must have 10 digits']
  },
  email: {
    type: String,
    required: [true, "Please enter valid email !"],
    unique: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['guide', 'traveller', 'admin']
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],

  guide: {
    type: Schema.Types.ObjectId,
    ref: 'Guide'
  },
  traveller: {
    type: Schema.Types.ObjectId,
    ref: 'Traveller'
  }
}, { timestamps: true });
UserSchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

// export default mongoose.model('User', UserSchema);
// module.exports = mongoose.model('User', UserSchema);
