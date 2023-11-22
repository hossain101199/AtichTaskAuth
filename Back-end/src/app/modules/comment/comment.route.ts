import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { commentController } from './comment.controller';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  commentController.createComment
);

export const commentRoutes = router;
