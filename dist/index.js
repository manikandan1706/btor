"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./config/config");
require("./src/ioc/root.ioc");
const server_container_1 = require("./src/looders/container/server.container");
const server_connection_1 = require("./src/looders/server.connection");
const loader_container_1 = require("./src/looders/container/loader.container");
const index_loader_1 = require("./src/looders/index.loader");
// let container:any = new Container();
// container.load(buildProviderModule());
loader_container_1.mainContainer.resolve(index_loader_1.Loaders);
server_container_1.serverContainer.resolve(server_connection_1.ServerConnection);
//# sourceMappingURL=index.js.map