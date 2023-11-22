import { Assign } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createAssignInDb = async (
  user: JwtPayload,
  payload: Assign
): Promise<Assign> => {
  payload.assignerId = user.id;

  const result = await prisma.assign.create({
    data: payload,
  });

  return result;
};

export const assignService = {
  createAssignInDb,
};
