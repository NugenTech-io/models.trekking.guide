const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravellerSchema = new Schema({
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
  country: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });
TravellerSchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.Traveller || mongoose.model('Traveller', TravellerSchema);

// export default mongoose.model('Traveller', TravellerSchema);
// module.exports = mongoose.model('Traveller', TravellerSchema);
