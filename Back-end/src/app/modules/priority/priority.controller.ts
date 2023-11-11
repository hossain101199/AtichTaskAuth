import { Priority } from '@prisma/client';
import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { priorityService } from './priority.service';

const createPriority: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await priorityService.createPriorityInDb(data);

  sendResponse<Priority>(res, {
    statusCode: 200,
    success: true,
    message: 'Priority created successfully',
    data: result,
  });
});

const getAllPriorities: RequestHandler = catchAsync(async (req, res) => {
  const result = await priorityService.getAllPrioritiesFromDb();

  sendResponse<Priority[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Priorities retrieved successfully',
    data: result,
  });
});

export const priorityController = { createPriority, getAllPriorities };
