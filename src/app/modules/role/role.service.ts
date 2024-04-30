import { Role, UserRole } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createRoleInDb = async (
  user: JwtPayload,
  payload: Role
): Promise<Role | undefined> => {
  let result;

  if (user?.role == UserRole.USER) {
    throw new ApiError(403, 'Forbidden');
  }

  if (user?.role == UserRole.ADMIN || UserRole.SUPER_ADMIN) {
    result = await prisma.role.create({
      data: payload,
    });
  }

  return result;
};

const getAllRolesFromDb = async (): // user: JwtPayload,
// projectId: string
Promise<Role[] | undefined> => {
  // let result;

  // if (user.role === UserRole.SUPER_ADMIN || user.role === UserRole.ADMIN) {
  //   result = await prisma.role.findMany();
  // }

  // if (user.role === UserRole.USER && ) {
  //   result = await prisma.role.findMany({
  //     where: {
  //       OR: [{ projectId: projectId }, { projectId: null }],
  //     },
  //   });
  // }

  const result = await prisma.role.findMany();

  return result;
};

export const roleService = {
  createRoleInDb,
  getAllRolesFromDb,
};

// {
//   "title": "Administrator",
//   "description": "Full access to project management and settings"
// }
// {
//   "title": "Project Manager",
//   "description": "Manages project scope, timeline, and resources"
// }
// {
//   "title": "Contributor",
//   "description": "Can contribute content to specific project areas"
// }
// {
//   "title": "Stakeholder",
//   "description": "Receives project updates and can provide feedback"
// }
// {
//   "title": "Editor",
//   "description": "Can create, edit, and delete project content"
// }
// {
//   "title": "Viewer",
//   "description": "Can view project content but cannot edit"
// }
// {
//   "title": "Guest",
//   "description": "Limited access for external collaborators (optional)"
// }
// {
//   "title": "Team Member",
//   "description": "Member of the project team (specific role to be assigned later)"
// }
// {
//   "title": "Intern",
//   "description": "Limited access for learning and assisting with tasks"
// }
