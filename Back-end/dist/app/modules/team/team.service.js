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
exports.teamService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createTeamInDb = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const receiver = yield prisma_1.default.user.findUnique({
        where: {
            email: payload === null || payload === void 0 ? void 0 : payload.receiverEmail,
        },
        select: {
            id: true,
        },
    });
    if (!receiver) {
        throw new ApiError_1.default(404, `The user with the email ${payload === null || payload === void 0 ? void 0 : payload.receiverEmail} was not found`);
    }
    const result = yield prisma_1.default.team.create({
        data: {
            projectId: payload.projectId,
            roleId: payload.roleId,
            senderId: user === null || user === void 0 ? void 0 : user.id,
            receiverId: receiver === null || receiver === void 0 ? void 0 : receiver.id,
        },
    });
    return result;
});
exports.teamService = {
    createTeamInDb,
};
