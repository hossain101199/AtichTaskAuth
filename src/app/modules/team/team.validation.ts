import { z } from 'zod';

const createTeamZodSchema = z.object({
  body: z.object({
    projectId: z.string({ required_error: 'Project Id required' }),
    roleId: z.string({ required_error: 'Role Id required' }),
    receiverEmail: z
      .string({
        required_error: 'Receiver Email is required',
      })
      .email('Invalid email format. Please enter a valid email address.'),
  }),
});

export const teamValidation = {
  createTeamZodSchema,
};
