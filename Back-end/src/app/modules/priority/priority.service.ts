import { Priority } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPriorityInDb = async (payload: Priority): Promise<Priority> => {
  const result = await prisma.priority.create({
    data: payload,
  });
  return result;
};

const getAllPrioritiesFromDb = async (): Promise<Priority[]> => {
  const result = await prisma.priority.findMany();
  return result;
};

export const priorityService = {
  createPriorityInDb,
  getAllPrioritiesFromDb,
};
