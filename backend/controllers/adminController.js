import mongoose from 'mongoose';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';
import User from '../models/User.js';
import VisaApplication from '../models/VisaApplication.js';

export const getDashboardAnalytics = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return res.json({
      totalBookings: 0,
      totalRevenue: 0,
      activeUsers: 0,
      visaApplications: 0
    });
  }

  const [totalBookings, payments, activeUsers, visaApplications] = await Promise.all([
    Booking.countDocuments(),
    Payment.find({ status: 'paid' }),
    User.countDocuments(),
    VisaApplication.countDocuments()
  ]);

  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);

  res.json({
    totalBookings,
    totalRevenue,
    activeUsers,
    visaApplications
  });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
};
