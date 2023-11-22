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
      `The user with the email ${payload?.receiverEmail} was not found`
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
