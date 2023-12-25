import { Router } from "express";
import { ExpressAdapter } from "../../adapters/expressAdapter.js";
export class Routes {
    constructor({ tshirtController, commerceController }) {
        this.tshirtController = tshirtController;
        this.commerceController = commerceController;
    }
    getRoutes() {
        const routes = Router();
        routes.route("/tshirt")
            .get(ExpressAdapter.adapt(this.tshirtController.getAllTshirts.bind(this.tshirtController)))
            .post(ExpressAdapter.adapt(this.tshirtController.insertTshirt.bind(this.tshirtController)))
            .put(ExpressAdapter.adapt(this.tshirtController.updateTshirt.bind(this.tshirtController)))
            .delete(ExpressAdapter.adapt(this.tshirtController.inactiveTshirt.bind(this.tshirtController)));
        routes.route("/tshirt/:id")
            .get(ExpressAdapter.adapt(this.tshirtController.getByIdTshirt.bind(this.tshirtController)));
        routes.route("/sellTshirt")
            .post(ExpressAdapter.adapt(this.commerceController.sellTshirts.bind(this.commerceController)));
        return routes;
    }
}
