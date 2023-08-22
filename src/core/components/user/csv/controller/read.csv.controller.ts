import "reflect-metadata";
import { provide } from "inversify-binding-decorators";
import { IReadCsvController } from "./interface/read.csv.controller.interface";
import TYPES from "../csv.types";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ReadCsvService } from "../service/read.csv.service";
import { inject } from "inversify";

@provide(TYPES.READ_CSV_CONTROLLER)
export class ReadCsvController implements IReadCsvController {
    constructor(
        @inject(TYPES.READ_CSV_SERVICE) private readCsvService : ReadCsvService
        ){
    }

    async show(request:Request, h:ResponseToolkit):Promise<any>{
        try {
            return this.readCsvService.show();
        } catch (error) {
            return {status:404, message: "failed", data:[]}
        }
    }

    async show2(request:Request, h:ResponseToolkit){
       return "hai";
    }
}