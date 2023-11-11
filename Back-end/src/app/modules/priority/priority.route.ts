import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { priorityController } from './priority.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  priorityController.createPriority
);
router.get('/', priorityController.getAllPriorities);

export const priorityRoutes = router;
