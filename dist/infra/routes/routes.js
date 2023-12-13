import { Router } from "express";
import { ExpressAdapter } from "../../adapters/expressAdapter.js";
export class Routes {
    constructor(controller) {
        this.controller = controller;
    }
    getRoutes() {
        const routes = Router();
        routes.route("/tshirt").get(ExpressAdapter.adapt(this.controller.getAllTshirts.bind(this.controller)));
        routes.route("/tshirt").post(ExpressAdapter.adapt(this.controller.insertTshirt.bind(this.controller)));
        return routes;
    }
}
