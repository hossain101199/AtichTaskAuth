import { Prisma, Task } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { parseDate } from '../../../shared/dateTimeChecker';
import prisma from '../../../shared/prisma';
import { taskSearchableFields } from './task.constant';
import { ITaskFilters } from './task.interface';

const createTaskInDb = async (
  payload: Task,
  user: JwtPayload
): Promise<Task> => {
  payload.creatorId = user.id;

  payload.priorityId =
    payload.priorityId ?? 'f1d49543-9b70-44f8-b647-db7a8440b991';

  payload.statusId = payload.statusId ?? 'c8489b52-feeb-4bd2-85b8-d0a14602d8cd';

  if (payload.dueDate) {
    payload.dueDate = parseDate(
      parseDate(payload?.dueDate)?.toISOString()?.split('T')[0]
    );
  }

  const result = await prisma.task.create({
    data: payload,
  });

  return result;
};

const getAllTasksFromDb = async (
  user: JwtPayload,
  filters: ITaskFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Task[]>> => {
  const { searchTerm, dueDate, startDate, endDate, ...filtersData } = filters;

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: taskSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (dueDate) {
    andConditions.push({
      dueDate: {
        equals: parseDate(dueDate),
      },
    });
  }

  if (startDate || endDate) {
    andConditions.push({
      dueDate: {
        ...(startDate && { gte: new Date(startDate) }),
        ...(endDate && { lte: new Date(endDate) }),
      },
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      AND: Object.entries(filtersData).map(([field, value]) => ({
        [field]: {
          equals: value,
        },
      })),
    });
  }

  const sortConditions: { [key: string]: string } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions: Prisma.TaskWhereInput =
    andConditions.length > 0
      ? { AND: [...andConditions, { creatorId: user.id }] }
      : { creatorId: user.id };

  const result = await prisma.task.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });

  const total = await prisma.task.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const taskService = {
  createTaskInDb,
  getAllTasksFromDb,
};
