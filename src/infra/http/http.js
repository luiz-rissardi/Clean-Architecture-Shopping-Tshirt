"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_js_1 = require("../routes/routes.js");
var FactoryInMemory_js_1 = require("../factory/FactoryInMemory.js");
var hapi_1 = require("@hapi/hapi");
var server = hapi_1.default.server({
    port: 3000,
    host: "localhost"
});
server.realm.modifiers.route.prefix = '/api';
initDependecies();
await server.start();
console.log("server running in 3000");
// server.listen(3000,()=>{
// });
function initDependecies() {
    var tshirtController = FactoryInMemory_js_1.FactoryTshirtController.createInstance();
    var commerceController = FactoryInMemory_js_1.FactoryCommerceController.createInstance();
    var routes = new routes_js_1.Routes({ tshirtController: tshirtController, commerceController: commerceController }).getRoutes();
    server.route(routes);
}
