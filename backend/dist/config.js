"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const isProduction = process.env.NODE_ENV === "production";
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "..", isProduction ? ".env" : ".env.local"),
});
exports.config = {
    PORT: process.env.PORT,
    FRONTEND_DIST_PATH: path_1.default.resolve(__dirname, "..", "..", "frontend", "dist"),
};
