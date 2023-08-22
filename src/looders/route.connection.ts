import { Container, inject, injectable } from "inversify";
import { IReadCsvController } from "../core/components/user/csv/controller/interface/read.csv.controller.interface";
import TYPES from "../core/components/user/csv/csv.types";
import { DatabaseConnction } from "./database.connection";
import { ILoader } from "./interfaces/loader.interface";
import LOADER_TYPES from "./types/types.loaders";


export class RouteConnection {
    container: Container;
    constructor(
        container:Container
    ){
        this.container = container
    }

    loadRoute(): any{
        const a = this.container.get<IReadCsvController>(TYPES.READ_CSV_CONTROLLER);
    }
}