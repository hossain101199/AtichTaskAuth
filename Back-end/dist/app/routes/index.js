"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assign_route_1 = require("../modules/assign/assign.route");
const auth_route_1 = require("../modules/auth/auth.route");
const comment_route_1 = require("../modules/comment/comment.route");
const priority_route_1 = require("../modules/priority/priority.route");
const profile_route_1 = require("../modules/profile/profile.route");
const project_route_1 = require("../modules/project/project.route");
const role_route_1 = require("../modules/role/role.route");
const task_route_1 = require("../modules/task/task.route");
const taskStatus_route_1 = require("../modules/taskStatus/taskStatus.route");
const team_route_1 = require("../modules/team/team.route");
const user_route_1 = require("../modules/user/user.route");
const routes = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.authRoutes,
    },
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/profile',
        route: profile_route_1.profileRoutes,
    },
    {
        path: '/priorities',
        route: priority_route_1.priorityRoutes,
    },
    {
        path: '/task-status',
        route: taskStatus_route_1.taskStatusRoutes,
    },
    {
        path: '/projects',
        route: project_route_1.projectRoutes,
    },
    {
        path: '/roles',
        route: role_route_1.roleRoutes,
    },
    {
        path: '/teams',
        route: team_route_1.teamRoutes,
    },
    {
        path: '/tasks',
        route: task_route_1.taskRoutes,
    },
    {
        path: '/assigns',
        route: assign_route_1.assignRoutes,
    },
    {
        path: '/comments',
        route: comment_route_1.commentRoutes,
    },
];
moduleRoutes.forEach(route => routes.use(route.path, route.route));
exports.default = routes;
