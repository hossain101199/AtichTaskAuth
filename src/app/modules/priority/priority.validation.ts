import { z } from 'zod';

const createPriorityZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string().optional(),
  }),
});

export const priorityValidation = {
  createPriorityZodSchema,
};
