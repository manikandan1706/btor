"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var environment = typeof process.env.NODE_ENV != "undefined" ? process.env.NODE_ENV : "development";
var envPath = "./config/.env.".concat(environment);
dotenv_1.default.config({ path: envPath });
//# sourceMappingURL=config.js.map