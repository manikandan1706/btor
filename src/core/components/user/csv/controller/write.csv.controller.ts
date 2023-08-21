import { provide } from "inversify-binding-decorators";
import TYPES from "../csv.types";
import { IWriteCsvController } from "./interface/write.csv.controller.interface";

@provide(TYPES.WRITE_CSV_CONTROLLER)
export class WriteCsvController implements IWriteCsvController {
    constructor(){

    }

    async create(data: any):Promise<any>{
        try {
            
        } catch (error) {
            
        }
    }
}