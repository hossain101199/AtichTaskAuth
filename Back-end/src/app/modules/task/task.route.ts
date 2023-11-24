import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { taskController } from './task.controller';
import { taskValidation } from './task.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(taskValidation.createTaskZodSchema),
  taskController.createTask
);

router.get(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(taskValidation.filtersTaskZodSchema),
  taskController.getAllTasks
);

export const taskRoutes = router;
