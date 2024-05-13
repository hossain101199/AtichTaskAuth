import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { teamController } from './team.controller';
import { teamValidation } from './team.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(teamValidation.createTeamZodSchema),
  teamController.createTeam
);

export const teamRoutes = router;
