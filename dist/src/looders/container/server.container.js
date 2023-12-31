"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverContainer = void 0;
const inversify_1 = require("inversify");
const server_connection_1 = require("../server.connection");
const types_loaders_1 = __importDefault(require("../types/types.loaders"));
let serverContainer = new inversify_1.Container();
exports.serverContainer = serverContainer;
serverContainer.bind(types_loaders_1.default.SERVER_CONNECT).to(server_connection_1.ServerConnection);
//# sourceMappingURL=server.container.js.map