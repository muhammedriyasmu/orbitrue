import express from 'express';
import {
  createVisaApplication,
  getAllVisaApplications,
  getMyVisaApplications,
  updateVisaStatus
} from '../controllers/visaController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single('document'), createVisaApplication);
router.get('/me', protect, getMyVisaApplications);
router.get('/admin/all', protect, adminOnly, getAllVisaApplications);
router.patch('/admin/:id', protect, adminOnly, updateVisaStatus);

export default router;
