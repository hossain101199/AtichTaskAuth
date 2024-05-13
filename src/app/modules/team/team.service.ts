import { Team } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { ITeam } from './team.interface';

const createTeamInDb = async (
  user: JwtPayload,
  payload: ITeam
): Promise<Team> => {
  const receiver = await prisma.user.findUnique({
    where: {
      email: payload?.receiverEmail,
    },
    select: {
      id: true,
    },
  });

  if (!receiver) {
    throw new ApiError(
      404,
      `User with email "${payload.receiverEmail}" not found`
    );
  }

  const project = await prisma.project.findUnique({
    where: {
      id: payload.projectId,
      creatorId: user?.id,
    },
  });

  if (!project) {
    throw new ApiError(
      403,
      `You are not authorized to create a team for this project`
    );
  }

  const result = await prisma.team.create({
    data: {
      projectId: payload.projectId,
      roleId: payload.roleId,
      senderId: user?.id,
      receiverId: receiver?.id,
    },
  });

  return result;
};

export const teamService = {
  createTeamInDb,
};
