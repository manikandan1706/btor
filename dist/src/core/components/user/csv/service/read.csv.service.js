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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCsvService = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const csv_types_1 = __importDefault(require("../csv.types"));
const read_csv_repository_1 = require("../repository/read.csv.repository");
let ReadCsvService = class ReadCsvService {
    constructor(readCsvRepository) {
        this.readCsvRepository = readCsvRepository;
    }
    async show() {
        try {
            return this.readCsvRepository.show();
        }
        catch (error) {
            return { status: 404, message: "failed", data: [] };
        }
    }
};
ReadCsvService = __decorate([
    (0, inversify_binding_decorators_1.provide)(csv_types_1.default.READ_CSV_SERVICE),
    __param(0, (0, inversify_1.inject)(csv_types_1.default.READ_CSV_REPOSITORY)),
    __metadata("design:paramtypes", [read_csv_repository_1.ReadCsvRepository])
], ReadCsvService);
exports.ReadCsvService = ReadCsvService;
//# sourceMappingURL=read.csv.service.js.map