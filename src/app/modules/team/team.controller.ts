import { Team } from '@prisma/client';
import { RequestHandler } from 'express';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { teamService } from './team.service';

const createTeam: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;

  const { verifiedUser } = req;
  if (!verifiedUser) {
    throw new ApiError(403, 'Forbidden');
  }

  const result = await teamService.createTeamInDb(verifiedUser, data);

  sendResponse<Team>(res, {
    statusCode: 200,
    success: true,
    message: 'Team created successfully',
    data: result,
  });
});

export const teamController = { createTeam };
