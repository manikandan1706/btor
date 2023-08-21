import { inject, injectable } from "inversify";
import { DatabaseConnction } from "./database.connection";
import { ILoader } from "./interfaces/loader.interface";
import LOADER_TYPES from "./types/types.loaders";

@injectable()
export class Loaders implements ILoader{
    constructor(
        @inject(LOADER_TYPES.DATABASE_CONNECT) public database : DatabaseConnction
    ){
        this.loadDataBase()
    }

    loadDataBase(): boolean{
        return this.database.connect();
    }
}