import { Task } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createTaskInDb = async (
  payload: Task,
  user: JwtPayload
): Promise<Task> => {
  payload.creatorId = user.id;

  const result = await prisma.task.create({
    data: payload,
  });

  return result;
};

export const taskService = {
  createTaskInDb,
};
