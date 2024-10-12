"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: false },
    country: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartment: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    orderNotes: { type: String, required: false },
});
exports.Order = (0, mongoose_1.model)('Orders', orderSchema);
