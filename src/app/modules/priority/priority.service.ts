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

// {
//     "title": "None",
//     "description": "Tasks of no immediate importance or urgency. These tasks can be put off until later without significant impact."
// }
// {
//     "title": "Low",
//     "description": "Tasks that are important but not urgent. These tasks can be completed when time permits, but they should not be ignored indefinitely."
// }
// {
//     "title": "Medium",
//     "description": "Tasks that have a balance of importance and urgency. These tasks should be prioritized and completed in a timely manner."
// }
// {
//     "title": "High",
//     "description": "Tasks that are critical and urgent. These tasks should be given top priority and completed as soon as possible."
// }
// {
//     "title": "Urgent",
//     "description": "Tasks that require immediate attention and cannot be delayed. These tasks should be dropped everything and completed immediately."
// }

// priorities color:
// None:#808080
// Low:#0000FF
// Medium:#FFFF00
// High:#FFA500
// Urgent:#FF0000
