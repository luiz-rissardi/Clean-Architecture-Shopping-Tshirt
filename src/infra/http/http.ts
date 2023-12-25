import http from "http";
import express from "express";
import { Routes } from "../routes/routes.js";
import { FactoryCommerceController, FactoryTshirtController } from "../factory/FactoryInMemory.js";
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app);

server.listen(3000,()=>{
    console.log("server running in 3000");
    initDependecies();
});

function initDependecies(){
    const tshirtController = FactoryTshirtController.createInstance();
    const commerceController = FactoryCommerceController.createInstance();
    app.use(bodyParser.json())
    app.use("/api",new Routes({tshirtController, commerceController}).getRoutes());
}

