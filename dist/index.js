"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connecToDB_1 = __importDefault(require("./DataBase/connecToDB"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send("hellow ");
});
app.listen(PORT, () => {
    (0, connecToDB_1.default)();
    console.log(`Connected at ${PORT}`);
});
