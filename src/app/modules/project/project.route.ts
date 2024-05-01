import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { projectController } from './project.controller';
import { projectValidation } from './project.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(projectValidation.createProjectZodSchema),
  projectController.createProject
);

export const projectRoutes = router;
