"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryCommerceController = exports.FactoryTshirtController = void 0;
var CommerceController_js_1 = require("../../controllers/CommerceController.js");
var tshirtController_js_1 = require("../../controllers/tshirtController.js");
var createTshirt_js_1 = require("../../core/useCase/createTshirt.js");
var getAllTshirt_js_1 = require("../../core/useCase/getAllTshirt.js");
var getTshirt_js_1 = require("../../core/useCase/getTshirt.js");
var inactiveTshirt_js_1 = require("../../core/useCase/inactiveTshirt.js");
var putTshirt_js_1 = require("../../core/useCase/putTshirt.js");
var sellTshirts_js_1 = require("../../core/useCase/sellTshirts.js");
var TshirtRepositoryInMemory_js_1 = require("../repository/TshirtRepositoryInMemory.js");
var FactoryTshirtController = /** @class */ (function () {
    function FactoryTshirtController() {
    }
    FactoryTshirtController.createInstance = function () {
        var repository = new TshirtRepositoryInMemory_js_1.TshirtRepositoryInMemory(new Map());
        var useCases = {
            createTshirt: new createTshirt_js_1.CreateTshirt(repository),
            getAllTshirt: new getAllTshirt_js_1.GetAllTshirts(repository),
            getTshirt: new getTshirt_js_1.GetTshirt(repository),
            putTshirt: new putTshirt_js_1.PutTshirt(repository),
            inactiveTshirt: new inactiveTshirt_js_1.InactiveTshirt(repository),
            sellTshirts: new sellTshirts_js_1.SellTshirt(repository)
        };
        return new tshirtController_js_1.TshirtController(useCases);
    };
    return FactoryTshirtController;
}());
exports.FactoryTshirtController = FactoryTshirtController;
var FactoryCommerceController = /** @class */ (function () {
    function FactoryCommerceController() {
    }
    FactoryCommerceController.createInstance = function () {
        var repository = new TshirtRepositoryInMemory_js_1.TshirtRepositoryInMemory(new Map());
        var useCases = {
            createTshirt: new createTshirt_js_1.CreateTshirt(repository),
            getAllTshirt: new getAllTshirt_js_1.GetAllTshirts(repository),
            getTshirt: new getTshirt_js_1.GetTshirt(repository),
            putTshirt: new putTshirt_js_1.PutTshirt(repository),
            inactiveTshirt: new inactiveTshirt_js_1.InactiveTshirt(repository),
            sellTshirts: new sellTshirts_js_1.SellTshirt(repository)
        };
        return new CommerceController_js_1.CommerceController(useCases);
    };
    return FactoryCommerceController;
}());
exports.FactoryCommerceController = FactoryCommerceController;
