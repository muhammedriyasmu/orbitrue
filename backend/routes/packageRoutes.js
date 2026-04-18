import express from 'express';
import {
  createPackage,
  deletePackage,
  getPackageBySlug,
  getPackages,
  updatePackage
} from '../controllers/packageController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPackages);
router.get('/:slug', getPackageBySlug);
router.post('/', protect, adminOnly, createPackage);
router.put('/:id', protect, adminOnly, updatePackage);
router.delete('/:id', protect, adminOnly, deletePackage);

export default router;
