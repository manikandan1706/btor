"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnction = void 0;
require("reflect-metadata");
var inversify_1 = require("inversify");
var mongoose_1 = __importDefault(require("mongoose"));
require("../../config/config");
var DatabaseConnction = /** @class */ (function () {
    function DatabaseConnction() {
    }
    DatabaseConnction.prototype.connect = function () {
        try {
            var options = { useNewUrlParser: true, useUnifiedTopology: true };
            var mongoDBUrl = process.env.MONGO_DB_URL ? String(process.env.MONGO_DB_URL) : "";
            mongoose_1.default.connect(mongoDBUrl, options);
            mongoose_1.default.connection.on('error', function (err) {
                console.log("DB error ".concat(err));
            });
            mongoose_1.default.connection.on('disconnected', function (err) {
                console.log("DB disconnected error ".concat(err));
            });
            return true;
        }
        catch (error) {
            return false;
        }
    };
    DatabaseConnction = __decorate([
        (0, inversify_1.injectable)()
    ], DatabaseConnction);
    return DatabaseConnction;
}());
exports.DatabaseConnction = DatabaseConnction;
//# sourceMappingURL=database.connection.js.map