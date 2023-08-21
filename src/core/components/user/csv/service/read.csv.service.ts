import { provide } from "inversify-binding-decorators";
import TYPES from "../csv.types";
import { IReadCsvService } from "./interface/read.csv.service.interface";
import { ReadCsvRepository } from "../repository/read.csv.repository";
import { inject } from "inversify";

@provide(TYPES.READ_CSV_SERVICE)
export class ReadCsvService implements IReadCsvService {
    constructor(){
        @inject(TYPES.READ_CSV_REPOSITORY) readCsvRepository : ReadCsvRepository
    }

    public async show():Promise<any>{
        try { 
            return await this.readCsvRepository.show();
        } catch (error) {
            return {status:404, message: "failed", data:[]}
        }
    }
}