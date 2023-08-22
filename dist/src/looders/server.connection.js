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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConnection = void 0;
require("reflect-metadata");
const hapi_1 = require("@hapi/hapi");
const inversify_1 = require("inversify");
require("../../config/config");
require("../ioc/root.ioc");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const csv_types_1 = __importDefault(require("../core/components/user/csv/csv.types"));
let ServerConnection = class ServerConnection {
    constructor() {
        this.connect();
    }
    connect() {
        try {
            let container = new inversify_1.Container();
            container.load((0, inversify_binding_decorators_1.buildProviderModule)());
            let a = container.get(csv_types_1.default.READ_CSV_CONTROLLER);
            console.log(a.show2());
            let port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
            let host = process.env.SERVER_HOST ? String(process.env.SERVER_HOST) : "localhost";
            const server = new hapi_1.Server({
                port: port,
                host: host
            });
            const routes = require("../core/components/user/csv/csv.route");
            // const r = require("../ioc/root.route");
            // console.log("r",r, rr);
            server.route(routes);
            console.log(routes);
            server.start();
            console.log('Server running on %s', server.info.uri);
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
ServerConnection = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ServerConnection);
exports.ServerConnection = ServerConnection;
//# sourceMappingURL=server.connection.js.map