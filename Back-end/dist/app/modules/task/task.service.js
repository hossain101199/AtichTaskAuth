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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const dateTimeChecker_1 = require("../../../shared/dateTimeChecker");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const task_constant_1 = require("./task.constant");
const createTaskInDb = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    payload.creatorId = user.id;
    payload.priorityId =
        (_a = payload.priorityId) !== null && _a !== void 0 ? _a : 'f1d49543-9b70-44f8-b647-db7a8440b991';
    payload.statusId = (_b = payload.statusId) !== null && _b !== void 0 ? _b : 'c8489b52-feeb-4bd2-85b8-d0a14602d8cd';
    if (payload.dueDate) {
        payload.dueDate = (0, dateTimeChecker_1.parseDate)((_d = (_c = (0, dateTimeChecker_1.parseDate)(payload === null || payload === void 0 ? void 0 : payload.dueDate)) === null || _c === void 0 ? void 0 : _c.toISOString()) === null || _d === void 0 ? void 0 : _d.split('T')[0]);
    }
    const result = yield prisma_1.default.task.create({
        data: payload,
    });
    return result;
});
const getAllTasksFromDb = (user, filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, dueDate, startDate, endDate } = filters, filtersData = __rest(filters, ["searchTerm", "dueDate", "startDate", "endDate"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: task_constant_1.taskSearchableFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (dueDate) {
        andConditions.push({
            dueDate: {
                equals: (0, dateTimeChecker_1.parseDate)(dueDate),
            },
        });
    }
    if (startDate || endDate) {
        andConditions.push({
            dueDate: Object.assign(Object.assign({}, (startDate && { gte: new Date(startDate) })), (endDate && { lte: new Date(endDate) })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            AND: Object.entries(filtersData).map(([field, value]) => ({
                [field]: {
                    equals: value,
                },
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0
        ? { AND: [...andConditions, { creatorId: user.id }] }
        : { creatorId: user.id };
    const result = yield prisma_1.default.task.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: sortConditions,
    });
    const total = yield prisma_1.default.task.count({ where: whereConditions });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
exports.taskService = {
    createTaskInDb,
    getAllTasksFromDb,
};
