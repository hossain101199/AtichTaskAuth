import { z } from 'zod';

const createRoleZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string().optional(),
    projectId: z.string().optional(),
  }),
});

export const roleValidation = {
  createRoleZodSchema,
};
