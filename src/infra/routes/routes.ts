import { Router } from "express";
import { ExpressAdapter } from "../../adapters/expressAdapter.js";
import { TshirtController } from "../../controllers/tshirtController.js";

export class Routes {
    constructor(private controller: TshirtController) {
    }

    getRoutes() {
        const routes = Router()

        routes.route("/tshirt")
            .get(ExpressAdapter.adapt(this.controller.getAllTshirts.bind(this.controller)))
            .post(ExpressAdapter.adapt(this.controller.insertTshirt.bind(this.controller)))

        routes.route("/tshirt")
            .put(ExpressAdapter.adapt(this.controller.updateTshirt.bind(this.controller)))

        return routes
    }
}