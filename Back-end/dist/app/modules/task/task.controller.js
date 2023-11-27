"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const pagination_1 = require("../../../constants/pagination");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const task_constant_1 = require("./task.constant");
const task_service_1 = require("./task.service");
const createTask = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { verifiedUser } = req;
    if (!verifiedUser) {
        throw new ApiError_1.default(403, 'Forbidden');
    }
    const result = yield task_service_1.taskService.createTaskInDb(data, verifiedUser);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Task created successfully',
        data: result,
    });
}));
const getAllTasks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { verifiedUser } = req;
    if (!verifiedUser) {
        throw new ApiError_1.default(403, 'Forbidden');
    }
    const filters = (0, pick_1.default)(req.query, task_constant_1.taskFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield task_service_1.taskService.getAllTasksFromDb(verifiedUser, filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Task retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
}));
exports.taskController = { createTask, getAllTasks };
