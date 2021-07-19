
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrekSchema = new Schema({
  trekName: {
    type: String,
    index: true
  },
  introText: {
    type: String
  },
  detailsText: {
    type: String
  },

  itinerary: [{
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    image: String
  }],

  image: {
    type: String
  },
  bannerImage: {
    type: String
  },
  tags: [{
    type: String
  }],
  isApproved: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });
TrekSchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.Trek || mongoose.model('Trek', TrekSchema);

// export default mongoose.model('Trek', TrekSchema);
// module.exports = mongoose.model('Trek', TrekSchema);
