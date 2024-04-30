import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { priorityRoutes } from '../modules/priority/priority.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { taskStatusRoutes } from '../modules/taskStatus/taskStatus.route';
import { userRoutes } from '../modules/user/user.route';
import { roleRoutes } from '../modules/role/role.route';

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
];

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
