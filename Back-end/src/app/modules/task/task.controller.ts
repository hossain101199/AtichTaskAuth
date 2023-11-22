import { Task } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { taskService } from './task.service';

const createTask: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await taskService.createTaskInDb(data, verifiedUser);

  sendResponse<Task>(res, {
    statusCode: 200,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
});

export const taskController = { createTask };
