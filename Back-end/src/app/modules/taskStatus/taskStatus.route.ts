import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { taskStatusController } from './taskStatus.controller';
import { taskStatusValidation } from './taskStatus.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(taskStatusValidation.createTaskStatusZodSchema),
  taskStatusController.createTaskStatus
);

router.get(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  taskStatusController.getAllTaskStatuses
);

export const taskStatusRoutes = router;
