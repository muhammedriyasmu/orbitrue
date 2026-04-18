import crypto from 'node:crypto';
import mongoose from 'mongoose';
import Razorpay from 'razorpay';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';

const getRazorpay = () =>
  new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });

const dbUnavailable = (res) => res.status(503).json({ message: 'Database is not connected' });

export const createRazorpayOrder = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const { amount, bookingId } = req.body;
  const order = await getRazorpay().orders.create({
    amount: Math.round(Number(amount) * 100),
    currency: 'INR',
    receipt: `booking_${bookingId}_${Date.now()}`
  });

  const payment = await Payment.create({
    user: req.user._id,
    booking: bookingId,
    razorpayOrderId: order.id,
    amount: Number(amount),
    currency: order.currency
  });

  res.status(201).json({ order, paymentId: payment._id });
};

export const verifyRazorpayPayment = async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    return dbUnavailable(res);
  }

  const { bookingId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest('hex');

  if (expectedSignature !== razorpaySignature) {
    return res.status(400).json({ message: 'Payment signature verification failed' });
  }

  const booking = await Booking.findByIdAndUpdate(
    bookingId,
    { status: 'confirmed', paymentStatus: 'paid' },
    { new: true }
  );

  const payment = await Payment.findOneAndUpdate(
    { razorpayOrderId },
    {
      razorpayPaymentId,
      razorpaySignature,
      status: 'paid',
      booking: bookingId
    },
    { new: true }
  );

  if (booking && payment) {
    booking.payment = payment._id;
    await booking.save();
  }

  res.json({ success: true, booking, payment });
};
