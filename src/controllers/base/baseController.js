"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var errosAplication_js_1 = require("../../core/ErrosAplication/errosAplication.js");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.ok = function (message, data) {
        if (data === void 0) { data = null; }
        return {
            message: message,
            data: data,
            statusCode: 200
        };
    };
    BaseController.prototype.badRequest = function (message) {
        return {
            message: message,
            statusCode: 400
        };
    };
    BaseController.prototype.InternalServerError = function (error) {
        return {
            message: errosAplication_js_1.AppError.UnexpectedError.create(error.message).error,
            statusCode: 500
        };
    };
    return BaseController;
}());
exports.BaseController = BaseController;
