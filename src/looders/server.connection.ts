import "reflect-metadata";
import { Server } from "@hapi/hapi";
import { Container, injectable } from "inversify";
import "../../config/config";
import { IServerConnection } from "./interfaces/server.interface";
import"../ioc/root.ioc";
import { buildProviderModule } from "inversify-binding-decorators";
import { IReadCsvController } from "../core/components/user/csv/controller/interface/read.csv.controller.interface";
import TYPES from "../core/components/user/csv/csv.types";
import * as rr from "../ioc/root.route";

@injectable()
export class ServerConnection implements IServerConnection{
    constructor(){
        this.connect();
    }

    public connect ():boolean {
        try {
            let container:any = new Container();
            container.load(buildProviderModule());

            let a:any =  container.get(TYPES.READ_CSV_CONTROLLER);
            // console.log(a.show2());

            let port:number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
            let host:string = process.env.SERVER_HOST ? String(process.env.SERVER_HOST) : "localhost";

            const server: Server = new Server({
                port:port,
                host: host
            });

            const routes =  require("../core/components/user/csv/csv.route");
            // const r = require("../ioc/root.route");
            // console.log("r",r, rr);
            console.log(routes);
            server.route(routes);
            

            server.start();
            console.log('Server running on %s', server.info.uri);

            return true;
        } catch (error) {
            return false;
        }
    }
}
