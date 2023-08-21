import { Container } from "inversify";
import { IDataBaseConnection } from "../interfaces/database.interface";
import { DatabaseConnction } from "../database.connection";
import LOADER_TYPES from "../types/types.loaders";

let mainContainer = new Container();

mainContainer.bind<IDataBaseConnection>(LOADER_TYPES.DATABASE_CONNECT).to(DatabaseConnction);

export {mainContainer};