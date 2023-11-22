import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { taskStatusController } from './taskStatus.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  taskStatusController.createTaskStatus
);

router.get(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  taskStatusController.getAllTaskStatuses
);

export const taskStatusRoutes = router;
