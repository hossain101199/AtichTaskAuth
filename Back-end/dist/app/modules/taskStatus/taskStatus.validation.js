"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatusValidation = void 0;
const zod_1 = require("zod");
const createTaskStatusZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string().optional(),
        projectId: zod_1.z.string().optional(),
    }),
});
exports.taskStatusValidation = {
    createTaskStatusZodSchema,
};
