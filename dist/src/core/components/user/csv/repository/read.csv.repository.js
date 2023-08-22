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
exports.ReadCsvRepository = void 0;
require("reflect-metadata");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const csv_types_1 = __importDefault(require("../csv.types"));
let ReadCsvRepository = class ReadCsvRepository {
    async show() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve("hello world");
            }
            catch (error) {
                reject({ status: 404, message: "failed", data: [] });
            }
        });
    }
};
ReadCsvRepository = __decorate([
    (0, inversify_binding_decorators_1.provide)(csv_types_1.default.READ_CSV_REPOSITORY)
], ReadCsvRepository);
exports.ReadCsvRepository = ReadCsvRepository;
//# sourceMappingURL=read.csv.repository.js.map