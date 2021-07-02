"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    res.send("PRODUCT");
});
exports.productRouter = router;
