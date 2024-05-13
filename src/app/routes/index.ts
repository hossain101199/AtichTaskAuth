import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { priorityRoutes } from '../modules/priority/priority.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { projectRoutes } from '../modules/project/project.route';
import { roleRoutes } from '../modules/role/role.route';
import { taskStatusRoutes } from '../modules/taskStatus/taskStatus.route';
import { teamRoutes } from '../modules/team/team.route';
import { userRoutes } from '../modules/user/user.route';

const routes = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/priorities',
    route: priorityRoutes,
  },
  {
    path: '/task-status',
    route: taskStatusRoutes,
  },
  {
    path: '/roles',
    route: roleRoutes,
  },
  {
    path: '/projects',
    route: projectRoutes,
  },
  {
    path: '/teams',
    route: teamRoutes,
  },
];

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
