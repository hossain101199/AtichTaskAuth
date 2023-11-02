import { UserRole } from '@prisma/client';
import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required.',
    }),
    role: z.enum([UserRole.USER]).default(UserRole.USER),
    contactNo: z.string({
      required_error: 'ContactNo is required.',
    }),
    profileImg: z.string({
      required_error: 'Profile Image link is required.',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z
      .enum([UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER])
      .optional(),
    contactNo: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const userValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
