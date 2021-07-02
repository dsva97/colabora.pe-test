"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const app = express_1.default();
app.use(express_1.default.static(config_1.config.FRONTEND_DIST_PATH));
app.use("/api", routes_1.router);
app.get("*", (_req, res) => {
    res.sendFile(path_1.default.resolve(config_1.config.FRONTEND_DIST_PATH, "index.html"));
});
app.listen(config_1.config.PORT, () => console.log(`Server running in port ${config_1.config.PORT}.`));
