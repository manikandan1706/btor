"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
require("./config/config");
require("./src/ioc/root.ioc");
var server_container_1 = require("./src/looders/container/server.container");
var server_connection_1 = require("./src/looders/server.connection");
var loader_container_1 = require("./src/looders/container/loader.container");
var index_loader_1 = require("./src/looders/index.loader");
var container = new inversify_1.Container();
container.load((0, inversify_binding_decorators_1.buildProviderModule)());
loader_container_1.mainContainer.resolve(index_loader_1.Loaders);
server_container_1.serverContainer.resolve(server_connection_1.ServerConnection);
//# sourceMappingURL=index.js.map