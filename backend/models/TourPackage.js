import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    includes: [{ type: String }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('TourPackage', packageSchema);
