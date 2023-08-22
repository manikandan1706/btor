"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainContainer = void 0;
const inversify_1 = require("inversify");
const database_connection_1 = require("../database.connection");
const types_loaders_1 = __importDefault(require("../types/types.loaders"));
let mainContainer = new inversify_1.Container();
exports.mainContainer = mainContainer;
mainContainer.bind(types_loaders_1.default.DATABASE_CONNECT).to(database_connection_1.DatabaseConnction);
//# sourceMappingURL=loader.container.js.map