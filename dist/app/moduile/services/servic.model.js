"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
// Define a Mongoose schema for the Service
const serviceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    currency: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
});
exports.Service = (0, mongoose_1.model)('Service', serviceSchema);
// Create and export the Mongoose model for the Service
