"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EdSchema = new mongoose_1.default.Schema({
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    city: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    message: {
        type: String,
    },
});
// Create the model
const Ed = mongoose_1.default.model("Ed", EdSchema);
exports.default = Ed;
