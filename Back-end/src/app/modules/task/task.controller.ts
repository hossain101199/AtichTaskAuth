import { Task } from '@prisma/client';
import { RequestHandler } from 'express';
import { paginationFields } from '../../../constants/pagination';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { taskFilterableFields } from './task.constant';
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

const getAllTasks: RequestHandler = catchAsync(async (req, res) => {
  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const filters = pick(req.query, taskFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await taskService.getAllTasksFromDb(
    verifiedUser,
    filters,
    paginationOptions
  );

  sendResponse<Task[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Task retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const taskController = { createTask, getAllTasks };
