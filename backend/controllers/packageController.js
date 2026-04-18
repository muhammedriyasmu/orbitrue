import mongoose from 'mongoose';
import TourPackage from '../models/TourPackage.js';
import Review from '../models/Review.js';
import { samplePackages, sampleReviews } from '../config/sampleData.js';

const useSamplePackages = () => mongoose.connection.readyState === 0;

export const getPackages = async (req, res) => {
  if (useSamplePackages()) {
    return res.json(samplePackages);
  }

  const packages = await TourPackage.find().sort({ createdAt: -1 });
  res.json(packages);
};

export const getPackageBySlug = async (req, res) => {
  const { slug } = req.params;

  if (useSamplePackages()) {
    const travelPackage = samplePackages.find((entry) => entry.slug === slug);
    return travelPackage
      ? res.json({ ...travelPackage, reviews: sampleReviews })
      : res.status(404).json({ message: 'Package not found' });
  }

  const travelPackage = await TourPackage.findOne({ slug });

  if (!travelPackage) {
    return res.status(404).json({ message: 'Package not found' });
  }

  const reviews = await Review.find({ itemType: 'package', itemId: travelPackage._id.toString() })
    .populate('user', 'name')
    .sort({ createdAt: -1 });

  res.json({ ...travelPackage.toObject(), reviews });
};

export const createPackage = async (req, res) => {
  const travelPackage = await TourPackage.create(req.body);
  res.status(201).json(travelPackage);
};

export const updatePackage = async (req, res) => {
  const travelPackage = await TourPackage.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(travelPackage);
};

export const deletePackage = async (req, res) => {
  await TourPackage.findByIdAndDelete(req.params.id);
  res.json({ message: 'Package deleted' });
};
