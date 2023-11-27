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
exports.taskStatusService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createTaskStatusInDb = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if ((user === null || user === void 0 ? void 0 : user.role) == client_1.UserRole.USER) {
        payload.creatorId = user === null || user === void 0 ? void 0 : user.id;
    }
    const result = yield prisma_1.default.taskStatus.create({
        data: payload,
    });
    return result;
});
const getAllTaskStatusesFromDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (user.role === client_1.UserRole.SUPER_ADMIN || user.role === client_1.UserRole.ADMIN) {
        result = yield prisma_1.default.taskStatus.findMany();
    }
    if (user.role === client_1.UserRole.USER) {
        result = yield prisma_1.default.taskStatus.findMany({
            where: {
                OR: [{ creatorId: user.id }, { creatorId: null, projectId: null }],
            },
        });
    }
    return result;
});
exports.taskStatusService = {
    createTaskStatusInDb,
    getAllTaskStatusesFromDb,
};
// {
//     "title": "To Do",
//     "description": "Tasks that have not yet been started."
// }
// {
//     "title": "In Progress",
//     "description": "Tasks that are currently being worked on."
// }
//   {
//     "title": "On Hold",
//     "description": "Tasks that are temporarily paused or awaiting further clarification."
//   }
//   {
//     "title": "Blocked",
//     "description": "Tasks that are unable to progress due to external dependencies or constraints."
//   }
//   {
//     "title": "Completed",
//     "description": "Tasks that have been successfully finished and meet all requirements."
//   }
//   {
//     "title": "Deferred",
//     "description": "Tasks that have been postponed or delayed for a future date."
//   }
//   {
//     "title": "Canceled",
//     "description": "Tasks that have been abandoned or terminated due to changing priorities or circumstances."
//   }
// task status color:
// To Do #008000
// In Progress #FFFF00
// On Hold #FFA500
// Blocked #FF0000
// Completed #006400
// Deferred #0000FF
// Canceled #808080
