"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = exports.parseDate = exports.isFutureDate = void 0;
const isFutureDate = (dueDate) => {
    const today = new Date();
    return dueDate > today;
};
exports.isFutureDate = isFutureDate;
const parseDate = (dateString) => new Date(dateString);
exports.parseDate = parseDate;
const isValidDate = (dateString) => {
    if (isNaN(Date.parse(dateString))) {
        return false;
    }
    else {
        return true;
    }
};
exports.isValidDate = isValidDate;
