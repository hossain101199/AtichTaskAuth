import { Comment } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { commentService } from './comment.service';

const createComment: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await commentService.createCommentInDb(verifiedUser, data);

  sendResponse<Comment>(res, {
    statusCode: 200,
    success: true,
    message: 'Commented successfully',
    data: result,
  });
});

export const commentController = { createComment };
