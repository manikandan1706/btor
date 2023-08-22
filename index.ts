import "reflect-metadata";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import "./config/config";
import "./src/ioc/root.ioc";
import { serverContainer } from "./src/looders/container/server.container";
import { ServerConnection } from "./src/looders/server.connection";
import { mainContainer } from "./src/looders/container/loader.container";
import { Loaders } from "./src/looders/index.loader";

// let container:any = new Container();
// container.load(buildProviderModule());

mainContainer.resolve(Loaders);
serverContainer.resolve(ServerConnection);