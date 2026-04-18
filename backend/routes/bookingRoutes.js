import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  getMyBookings,
  getPaymentHistory
} from '../controllers/bookingController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.post('/', createBooking);
router.get('/me', getMyBookings);
router.get('/payments/history', getPaymentHistory);
router.get('/admin/all', adminOnly, getAllBookings);
router.get('/:id', getBookingById);

export default router;
