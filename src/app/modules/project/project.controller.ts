import { Project } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { projectService } from './project.service';

const createProject: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await projectService.createProjectInDb(verifiedUser, data);

  sendResponse<Project>(res, {
    statusCode: 200,
    success: true,
    message: 'project created successfully',
    data: result,
  });
});

export const projectController = { createProject };
