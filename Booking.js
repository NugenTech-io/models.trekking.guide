const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    startDate: {
        type: Date,
        required: [true, 'You must add start date !']
    },
    endDate: {
        type: Date,
        required: [true, 'You must add end date !']
    },

    bookingStatus: {
        type: String,
        enum: ['OnHold', 'Processing', 'Booked']
    },
    trek: {
        type: Schema.Types.ObjectId,
        ref: 'Trek'
    },
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Traveller'
    },
    guide: {
        type: Schema.Types.ObjectId,
        ref: 'Guide'
    }

}, { timestamps: true });
BookingSchema.set('autoIndex', false);


// Nextjs issue fix for schema override
module.exports = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

// export default mongoose.model('Booking', BookingSchema);
// module.exports = mongoose.model('Booking', BookingSchema);

