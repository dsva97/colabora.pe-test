"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const product_1 = require("./product");
const router = express_1.Router();
exports.router = router;
router.use(cors_1.default());
router.use(express_1.json());
router.use(express_1.urlencoded({ extended: true }));
router.use("/product", product_1.productRouter);
