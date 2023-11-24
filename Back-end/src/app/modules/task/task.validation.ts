import { z } from 'zod';
import { isFutureDate, isValidDate } from '../../../shared/dateTimeChecker';

const createTaskZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string().optional(),
    dueDate: z
      .string()
      .transform(str => new Date(str))
      .refine(
        dueDate => {
          if (dueDate) {
            return isFutureDate(dueDate);
          }
        },
        { message: 'Due date cannot be earlier than today' }
      )
      .optional(),
    priorityId: z.string().optional(),
    statusId: z.string().optional(),
    projectId: z.string().optional(),
  }),
});

const dateField = z
  .string()
  .transform(str => new Date(str))
  .refine(
    date => {
      if (date) {
        return isValidDate(date as unknown as string);
      }
    },
    { message: 'Invalid date format' }
  )
  .optional();

const filtersTaskZodSchema = z.object({
  query: z.object({
    dueDate: dateField,
    startDate: dateField,
    endDate: dateField,
  }),
});

export const taskValidation = {
  createTaskZodSchema,
  filtersTaskZodSchema,
};
