import { Project } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createProjectInDb = async (
  user: JwtPayload,
  payload: Project
): Promise<Project> => {
  payload.creatorId = user?.id;

  const result = await prisma.project.create({
    data: payload,
  });

  return result;
};

export const projectService = {
  createProjectInDb,
};
