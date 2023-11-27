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
exports.priorityService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createPriorityInDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.priority.create({
        data: payload,
    });
    return result;
});
const getAllPrioritiesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.priority.findMany();
    return result;
});
exports.priorityService = {
    createPriorityInDb,
    getAllPrioritiesFromDb,
};
// {
//     "title": "None",
//     "description": "Tasks of no immediate importance or urgency. These tasks can be put off until later without significant impact."
// }
// {
//     "title": "Low",
//     "description": "Tasks that are important but not urgent. These tasks can be completed when time permits, but they should not be ignored indefinitely."
// }
// {
//     "title": "Medium",
//     "description": "Tasks that have a balance of importance and urgency. These tasks should be prioritized and completed in a timely manner."
// }
// {
//     "title": "High",
//     "description": "Tasks that are critical and urgent. These tasks should be given top priority and completed as soon as possible."
// }
// {
//     "title": "Urgent",
//     "description": "Tasks that require immediate attention and cannot be delayed. These tasks should be dropped everything and completed immediately."
// }
// priorities color:
// None:#808080
// Low:#0000FF
// Medium:#FFFF00
// High:#FFA500
// Urgent:#FF0000
