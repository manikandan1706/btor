import "reflect-metadata";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { IReadCsvService } from "./interface/read.csv.service.interface";
import TYPES from "../csv.types";
import { ReadCsvRepository } from "../repository/read.csv.repository";

@provide(TYPES.READ_CSV_SERVICE)
export class ReadCsvService implements IReadCsvService {
    constructor(
        @inject(TYPES.READ_CSV_REPOSITORY) private readCsvRepository : ReadCsvRepository
        ){
    }

    async show():Promise<any>{
        try { 
            return this.readCsvRepository.show();
        } catch (error) {
            return {status:404, message: "failed", data:[]}
        }
    }
}