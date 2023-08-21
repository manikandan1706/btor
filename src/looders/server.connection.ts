import "reflect-metadata";
import { Server } from "@hapi/hapi";
import { Container, injectable } from "inversify";
import "../../config/config";
import { IServerConnection } from "./interfaces/server.interface";
import"../ioc/root.ioc";

@injectable()
export class ServerConnection implements IServerConnection{
    constructor(){
        this.connect();
    }

    public connect():boolean {
        try {
            let container:any = new Container();

            let port:number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
            let host:string = process.env.SERVER_HOST ? String(process.env.SERVER_HOST) : "localhost";

            const server: Server = new Server({
                port:port,
                host: host
            });

            server.start();
            console.log('Server running on %s', server.info.uri);

            return true;
        } catch (error) {
            return false;
        }
    }
}
