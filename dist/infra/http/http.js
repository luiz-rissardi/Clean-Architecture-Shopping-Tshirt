import { Routes } from "../routes/routes.js";
import { FactoryCommerceController, FactoryTshirtController } from "../factory/FactoryInMemory.js";
import Hapi from "@hapi/hapi";
const server = Hapi.server({
    port: 3000,
    host: "localhost"
});
server.realm.modifiers.route.prefix = '/api';
initDependecies();
await server.start();
console.log("server running in 3000");
function initDependecies() {
    const tshirtController = FactoryTshirtController.createInstance();
    const commerceController = FactoryCommerceController.createInstance();
    const routes = new Routes({ tshirtController, commerceController }).getRoutes();
    server.route(routes);
}
