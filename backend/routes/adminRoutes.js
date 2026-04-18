import express from 'express';
import { getAllUsers, getDashboardAnalytics } from '../controllers/adminController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);
router.get('/analytics', getDashboardAnalytics);
router.get('/users', getAllUsers);

export default router;
