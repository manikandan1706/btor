"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteConnection = void 0;
const csv_types_1 = __importDefault(require("../core/components/user/csv/csv.types"));
class RouteConnection {
    constructor(container) {
        this.container = container;
    }
    loadRoute() {
        const a = this.container.get(csv_types_1.default.READ_CSV_CONTROLLER);
    }
}
exports.RouteConnection = RouteConnection;
//# sourceMappingURL=route.connection.js.map