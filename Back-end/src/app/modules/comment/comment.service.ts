import { Comment } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createCommentInDb = async (
  user: JwtPayload,
  payload: Comment
): Promise<Comment> => {
  payload.commenterId = user.id;
  const result = await prisma.comment.create({
    data: payload,
  });

  return result;
};

export const commentService = {
  createCommentInDb,
};
