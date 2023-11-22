import express from 'express';
import { assignRoutes } from '../modules/assign/assign.route';
import { authRoutes } from '../modules/auth/auth.route';
import { commentRoutes } from '../modules/comment/comment.route';
import { priorityRoutes } from '../modules/priority/priority.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { projectRoutes } from '../modules/project/project.route';
import { roleRoutes } from '../modules/role/role.route';
import { taskRoutes } from '../modules/task/task.route';
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
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/profile',
    route: profileRoutes,
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
    path: '/projects',
    route: projectRoutes,
  },
  {
    path: '/roles',
    route: roleRoutes,
  },
  {
    path: '/teams',
    route: teamRoutes,
  },
  {
    path: '/tasks',
    route: taskRoutes,
  },
  {
    path: '/assigns',
    route: assignRoutes,
  },
  {
    path: '/comments',
    route: commentRoutes,
  },
];

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
