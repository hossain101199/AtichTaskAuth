import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { roleController } from './role.controller';
import { roleValidation } from './role.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  validateRequest(roleValidation.createRoleZodSchema),
  roleController.createRole
);

router.get(
  '/',
  // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  roleController.getAllRoles
);

export const roleRoutes = router;
