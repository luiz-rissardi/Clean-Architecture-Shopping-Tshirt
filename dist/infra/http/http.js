import http from "http";
import express from "express";
import { Routes } from "../routes/routes.js";
import { FactoryTshirtController } from "../factory/FactoryInMemory.js";
import bodyParser from "body-parser";
const app = express();
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("server running in 3000");
    initDependecies();
});
function initDependecies() {
    const controller = FactoryTshirtController.createInstance();
    app.use(bodyParser.json());
    app.use("/api", new Routes(controller).getRoutes());
}
