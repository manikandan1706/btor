"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const csv_types_1 = __importDefault(require("./csv.types"));
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
require("../ioc/root.ioc");
// import { serverContainer } from "../../../../looders/container/server.container";
let Kernel = new inversify_1.Container();
Kernel.load((0, inversify_binding_decorators_1.buildProviderModule)());
// Kernel.bind<IReadCsvController>(TYPES.READ_CSV_CONTROLLER).to(ReadCsvController);
const readCsvController = Kernel.get(csv_types_1.default.READ_CSV_CONTROLLER);
module.exports = [{
        method: "GET",
        path: '/',
        handler: readCsvController.show
        // handler:(req:Request, h:ResponseToolkit)=>{
        //     return "hello world";
        // }
    }
    // {
    //     method:"GET",
    //     path:'/product/{id}',
    //     handler: ProductController.findOne
    // }
];
//# sourceMappingURL=csv.route.js.map