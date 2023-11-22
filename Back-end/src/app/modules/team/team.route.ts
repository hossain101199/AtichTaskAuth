import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { teamController } from './team.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  teamController.createTeam
);

export const teamRoutes = router;
