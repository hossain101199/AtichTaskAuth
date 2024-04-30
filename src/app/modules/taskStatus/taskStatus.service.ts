import { TaskStatus, UserRole } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const createTaskStatusInDb = async (
  user: JwtPayload,
  payload: TaskStatus
): Promise<TaskStatus> => {
  if (user?.role == UserRole.USER) {
    payload.creatorId = user?.id;
  }

  const result = await prisma.taskStatus.create({
    data: payload,
  });

  return result;
};

const getAllTaskStatusesFromDb = async (
  user: JwtPayload
): Promise<TaskStatus[] | undefined> => {
  let result;

  if (user.role === UserRole.SUPER_ADMIN || user.role === UserRole.ADMIN) {
    result = await prisma.taskStatus.findMany();
  }

  if (user.role === UserRole.USER) {
    result = await prisma.taskStatus.findMany({
      where: {
        OR: [{ creatorId: user.id }, { creatorId: null, projectId: null }],
      },
    });
  }

  return result;
};

export const taskStatusService = {
  createTaskStatusInDb,
  getAllTaskStatusesFromDb,
};

// {
//     "title": "To Do",
//     "description": "Tasks that have not yet been started."
// }
// {
//     "title": "In Progress",
//     "description": "Tasks that are currently being worked on."
// }
//   {
//     "title": "On Hold",
//     "description": "Tasks that are temporarily paused or awaiting further clarification."
//   }
//   {
//     "title": "Blocked",
//     "description": "Tasks that are unable to progress due to external dependencies or constraints."
//   }
//   {
//     "title": "Completed",
//     "description": "Tasks that have been successfully finished and meet all requirements."
//   }
//   {
//     "title": "Deferred",
//     "description": "Tasks that have been postponed or delayed for a future date."
//   }
//   {
//     "title": "Canceled",
//     "description": "Tasks that have been abandoned or terminated due to changing priorities or circumstances."
//   }

// task status color:
// To Do #008000
// In Progress #FFFF00
// On Hold #FFA500
// Blocked #FF0000
// Completed #006400
// Deferred #0000FF
// Canceled #808080
