import { Role } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { roleService } from './role.service';

const createRole: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await roleService.createRoleInDb(verifiedUser, data);

  sendResponse<Role>(res, {
    statusCode: 200,
    success: true,
    message: 'Role created successfully',
    data: result,
  });
});

export const roleController = { createRole };
