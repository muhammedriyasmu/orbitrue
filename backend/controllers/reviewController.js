import mongoose from 'mongoose';
import Review from '../models/Review.js';

const dbUnavailable = (res) => res.status(503).json({ message: 'Database is not connected' });

export const createReview = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const review = await Review.create({
    ...req.body,
    user: req.user._id
  });

  res.status(201).json(review);
};
