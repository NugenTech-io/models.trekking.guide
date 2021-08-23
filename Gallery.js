const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Gallery name must be added !'],
    index: true
  },
  description: {
    type: String
  },
  images: [{
    type: String
  }],
  galleryImage: {
    type: String
  },
  guide: {
    type: Schema.Types.ObjectId,
    ref: 'Guide'
  },


}, { timestamps: true });
GallerySchema.set('autoIndex', false);

// Nextjs issue fix for schema override
module.exports = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);

// export default mongoose.model('Gallery', GallerySchema);
// module.exports = mongoose.model('Gallery', GallerySchema);
