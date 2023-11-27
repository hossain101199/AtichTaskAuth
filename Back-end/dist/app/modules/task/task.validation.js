"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidation = void 0;
const zod_1 = require("zod");
const dateTimeChecker_1 = require("../../../shared/dateTimeChecker");
const createTaskZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string().optional(),
        dueDate: zod_1.z
            .string()
            .transform(str => new Date(str))
            .refine(dueDate => {
            if (dueDate) {
                return (0, dateTimeChecker_1.isFutureDate)(dueDate);
            }
        }, { message: 'Due date cannot be earlier than today' })
            .optional(),
        priorityId: zod_1.z.string().optional(),
        statusId: zod_1.z.string().optional(),
        projectId: zod_1.z.string().optional(),
    }),
});
const dateField = zod_1.z
    .string()
    .transform(str => new Date(str))
    .refine(date => {
    if (date) {
        return (0, dateTimeChecker_1.isValidDate)(date);
    }
}, { message: 'Invalid date format' })
    .optional();
const filtersTaskZodSchema = zod_1.z.object({
    query: zod_1.z.object({
        dueDate: dateField,
        startDate: dateField,
        endDate: dateField,
    }),
});
exports.taskValidation = {
    createTaskZodSchema,
    filtersTaskZodSchema,
};
