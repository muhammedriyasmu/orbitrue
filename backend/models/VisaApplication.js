import mongoose from 'mongoose';

const visaApplicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    passportNumber: { type: String, required: true },
    destinationCountry: { type: String, required: true },
    travelDate: { type: Date, required: true },
    documentName: { type: String },
    documentType: { type: String },
    status: { type: String, enum: ['submitted', 'in-review', 'approved', 'rejected'], default: 'submitted' }
  },
  { timestamps: true }
);

export default mongoose.model('VisaApplication', visaApplicationSchema);
