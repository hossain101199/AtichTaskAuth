import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { assignController } from './assign.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  assignController.createAssign
);

export const assignRoutes = router;
