import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { projectController } from './project.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  projectController.createProject
);

export const projectRoutes = router;
