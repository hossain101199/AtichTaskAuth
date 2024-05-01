import { z } from 'zod';

const createProjectZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Project name required' }),
    description: z.string({ required_error: 'Project description required' }),
    dueDate: z
      .string()
      .transform(str => new Date(str))
      .refine(date => date > new Date(), {
        message: 'due date less than today',
      })
      .optional(),
    profileImg: z.string().optional(),
  }),
});

export const projectValidation = {
  createProjectZodSchema,
};
