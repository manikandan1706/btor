import { Container } from "inversify";
import { IReadCsvController } from "./controller/interface/read.csv.controller.interface";
import { ReadCsvController } from "./controller/read.csv.controller";
import TYPES from "./csv.types";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ReadCsvService } from "./service/read.csv.service";
import { ReadCsvRepository } from "./repository/read.csv.repository";
import { buildProviderModule } from "inversify-binding-decorators";
import"../ioc/root.ioc";
// import { serverContainer } from "../../../../looders/container/server.container";

let Kernel = new Container();
Kernel.load(buildProviderModule());
// Kernel.bind<IReadCsvController>(TYPES.READ_CSV_CONTROLLER).to(ReadCsvController);
const readCsvController = Kernel.get<IReadCsvController>(TYPES.READ_CSV_CONTROLLER);

module.exports = [{
    method:"GET",
    path:'/',
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
]