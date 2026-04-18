import mongoose from 'mongoose';

const travelerSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    passportNumber: String
  },
  { _id: false }
);

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    itemType: { type: String, enum: ['flight', 'hotel', 'package'], required: true },
    itemId: { type: String, required: true },
    itemName: { type: String, required: true },
    itemSnapshot: { type: Object, required: true },
    travelerDetails: travelerSchema,
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
