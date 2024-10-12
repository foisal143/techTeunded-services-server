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
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceServices = void 0;
const servic_model_1 = require("./servic.model");
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield servic_model_1.Service.create(payload);
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield servic_model_1.Service.find();
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield servic_model_1.Service.findById(id);
    return result;
});
exports.serviceServices = {
    createService,
    getAllService,
    getSingleService,
};
