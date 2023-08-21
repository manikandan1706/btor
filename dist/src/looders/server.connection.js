"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConnection = void 0;
require("reflect-metadata");
var hapi_1 = require("@hapi/hapi");
var inversify_1 = require("inversify");
require("../../config/config");
require("../ioc/root.ioc");
var ServerConnection = /** @class */ (function () {
    function ServerConnection() {
        this.connect();
    }
    ServerConnection.prototype.connect = function () {
        try {
            var container = new inversify_1.Container();
            var port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
            var host = process.env.SERVER_HOST ? String(process.env.SERVER_HOST) : "localhost";
            var server = new hapi_1.Server({
                port: port,
                host: host
            });
            server.start();
            console.log('Server running on %s', server.info.uri);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    ServerConnection = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [])
    ], ServerConnection);
    return ServerConnection;
}());
exports.ServerConnection = ServerConnection;
//# sourceMappingURL=server.connection.js.map