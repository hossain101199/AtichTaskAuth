"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priorityRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const priority_controller_1 = require("./priority.controller");
const priority_validation_1 = require("./priority.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(priority_validation_1.priorityValidation.createPriorityZodSchema), priority_controller_1.priorityController.createPriority);
router.get('/', priority_controller_1.priorityController.getAllPriorities);
exports.priorityRoutes = router;
