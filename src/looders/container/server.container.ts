import { Container } from "inversify";
import { IServerConnection } from "../interfaces/server.interface";
import { ServerConnection } from "../server.connection";
import LOADER_TYPES from "../types/types.loaders";

let serverContainer = new Container();

serverContainer.bind<IServerConnection>(LOADER_TYPES.SERVER_CONNECT).to(ServerConnection);

export {serverContainer};