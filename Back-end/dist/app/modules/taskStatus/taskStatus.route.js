"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatusRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const taskStatus_controller_1 = require("./taskStatus.controller");
const taskStatus_validation_1 = require("./taskStatus.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(taskStatus_validation_1.taskStatusValidation.createTaskStatusZodSchema), taskStatus_controller_1.taskStatusController.createTaskStatus);
router.get('/', (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), taskStatus_controller_1.taskStatusController.getAllTaskStatuses);
exports.taskStatusRoutes = router;
