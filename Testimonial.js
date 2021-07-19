const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({

  title: {
    type: String
  },
  rating: {
    type: String
  },
  comments: {
    type: String
  },
  givenFor: {
    type: Schema.Types.ObjectId,
    ref: 'Guide'
  },
  givenBy: {
    type: Schema.Types.ObjectId,
    ref: 'Traveller'
  },
  reviewedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

}, { timestamps: true });
TestimonialSchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

// export default mongoose.model('Testimonial', TestimonialSchema);
// module.exports = mongoose.model('Testimonial', TestimonialSchema);

