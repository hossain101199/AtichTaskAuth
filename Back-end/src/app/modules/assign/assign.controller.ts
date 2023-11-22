import { Assign } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { assignService } from './assign.service';

const createAssign: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await assignService.createAssignInDb(verifiedUser, data);

  sendResponse<Assign>(res, {
    statusCode: 200,
    success: true,
    message: 'Assigned successfully',
    data: result,
  });
});

export const assignController = { createAssign };
