import { Role } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createRoleInDb = async (
  user: JwtPayload,
  payload: Role
): Promise<Role> => {
  const result = await prisma.role.create({
    data: payload,
  });

  return result;
};

export const roleService = {
  createRoleInDb,
};
