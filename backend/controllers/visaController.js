import mongoose from 'mongoose';
import VisaApplication from '../models/VisaApplication.js';

const dbUnavailable = (res) => res.status(503).json({ message: 'Database is not connected' });

export const createVisaApplication = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const application = await VisaApplication.create({
    ...req.body,
    user: req.user?._id,
    documentName: req.file?.originalname,
    documentType: req.file?.mimetype
  });

  res.status(201).json(application);
};

export const getMyVisaApplications = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const applications = await VisaApplication.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(applications);
};

export const getAllVisaApplications = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const applications = await VisaApplication.find().populate('user', 'name email').sort({ createdAt: -1 });
  res.json(applications);
};

export const updateVisaStatus = async (req, res) => {
  const application = await VisaApplication.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(application);
};
