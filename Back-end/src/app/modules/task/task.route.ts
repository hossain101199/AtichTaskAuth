import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { taskController } from './task.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  taskController.createTask
);

export const taskRoutes = router;
