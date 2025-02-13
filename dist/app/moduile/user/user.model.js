"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    isDeleted: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
