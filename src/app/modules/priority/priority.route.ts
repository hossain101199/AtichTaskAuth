import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { priorityController } from './priority.controller';
import { priorityValidation } from './priority.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(priorityValidation.createPriorityZodSchema),
  priorityController.createPriority
);

router.get('/', priorityController.getAllPriorities);

export const priorityRoutes = router;
