import { UserRole } from '@prisma/client';

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  contactNo: string;
  profileImg: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserFilters = {
  searchTerm?: string;
  name?: string;
  email?: string;
  role?: string;
  contactNo?: string;
};
