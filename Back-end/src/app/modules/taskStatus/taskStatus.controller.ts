import { TaskStatus } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { taskStatusService } from './taskStatus.service';

const createTaskStatus: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await taskStatusService.createTaskStatusInDb(
    verifiedUser,
    data
  );

  sendResponse<TaskStatus>(res, {
    statusCode: 200,
    success: true,
    message: 'Task status created successfully',
    data: result,
  });
});

const getAllTaskStatuses: RequestHandler = catchAsync(async (req, res) => {
  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await taskStatusService.getAllTaskStatusesFromDb(verifiedUser);

  sendResponse<TaskStatus[]>(res, {
    statusCode: 200,
    success: true,
    message: 'task statuses retrieved successfully',
    data: result,
  });
});

export const taskStatusController = { createTaskStatus, getAllTaskStatuses };
