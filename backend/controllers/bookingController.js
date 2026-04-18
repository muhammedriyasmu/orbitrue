import mongoose from 'mongoose';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';

const dbUnavailable = (res) => res.status(503).json({ message: 'Database is not connected' });

export const createBooking = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const booking = await Booking.create({
    ...req.body,
    user: req.user._id
  });

  res.status(201).json(booking);
};

export const getMyBookings = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const bookings = await Booking.find({ user: req.user._id }).populate('payment').sort({ createdAt: -1 });
  res.json(bookings);
};

export const getBookingById = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const booking = await Booking.findById(req.params.id).populate('payment');

  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  if (booking.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  res.json(booking);
};

export const getAllBookings = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const bookings = await Booking.find().populate('user', 'name email').populate('payment').sort({ createdAt: -1 });
  res.json(bookings);
};

export const getPaymentHistory = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const payments = await Payment.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(payments);
};
