import "reflect-metadata";
import { provide } from "inversify-binding-decorators";
import TYPES from "../csv.types";
import { IReadCsvRepository } from "./interface/read.csv.repository.interface";

@provide(TYPES.READ_CSV_REPOSITORY)
export class ReadCsvRepository implements IReadCsvRepository {

    async show():Promise<any>{
        return new Promise(async(resolve, reject) => {
            try {
                resolve("hello world");
            } catch (error) {
                reject({status:404, message: "failed", data:[]})
            }
        });
    }
}