import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { userRoutes } from '../modules/user/user.route';
import { priorityRoutes } from '../modules/priority/priority.route';

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
];

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
