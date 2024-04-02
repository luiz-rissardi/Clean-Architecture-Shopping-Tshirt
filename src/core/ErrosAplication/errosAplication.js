"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = exports.AppError = void 0;
var Result_js_1 = require("../../infra/errorHandling/Result.js");
var AppError;
(function (AppError) {
    var UnexpectedError = /** @class */ (function (_super) {
        __extends(UnexpectedError, _super);
        function UnexpectedError(error) {
            return _super.call(this, false, {
                message: "an unexpected error curred",
                error: error
            }) || this;
        }
        UnexpectedError.create = function (error) {
            return new UnexpectedError(error);
        };
        return UnexpectedError;
    }(Result_js_1.Result));
    AppError.UnexpectedError = UnexpectedError;
})(AppError || (exports.AppError = AppError = {}));
var DomainError;
(function (DomainError) {
    var ColorInvalidError = /** @class */ (function (_super) {
        __extends(ColorInvalidError, _super);
        function ColorInvalidError() {
            return _super.call(this, false, "a cor informada não está disponivel!") || this;
        }
        ColorInvalidError.create = function () {
            return new ColorInvalidError();
        };
        return ColorInvalidError;
    }(Result_js_1.Result));
    DomainError.ColorInvalidError = ColorInvalidError;
    var SizeInvalidError = /** @class */ (function (_super) {
        __extends(SizeInvalidError, _super);
        function SizeInvalidError() {
            return _super.call(this, false, "tamanho informado inválido") || this;
        }
        SizeInvalidError.create = function () {
            return new SizeInvalidError();
        };
        return SizeInvalidError;
    }(Result_js_1.Result));
    DomainError.SizeInvalidError = SizeInvalidError;
    var TshirtIsNotExist = /** @class */ (function (_super) {
        __extends(TshirtIsNotExist, _super);
        function TshirtIsNotExist() {
            return _super.call(this, false, "a camisa não existe") || this;
        }
        TshirtIsNotExist.create = function () {
            return new TshirtIsNotExist();
        };
        return TshirtIsNotExist;
    }(Result_js_1.Result));
    DomainError.TshirtIsNotExist = TshirtIsNotExist;
    var TshirtIsNotActive = /** @class */ (function (_super) {
        __extends(TshirtIsNotActive, _super);
        function TshirtIsNotActive() {
            return _super.call(this, false, "a camisa não esta ativada") || this;
        }
        TshirtIsNotActive.create = function () {
            return new TshirtIsNotActive();
        };
        return TshirtIsNotActive;
    }(Result_js_1.Result));
    DomainError.TshirtIsNotActive = TshirtIsNotActive;
    var TshirtIdIsNaN = /** @class */ (function (_super) {
        __extends(TshirtIdIsNaN, _super);
        function TshirtIdIsNaN() {
            return _super.call(this, false, "id precisa ser um numero") || this;
        }
        TshirtIdIsNaN.create = function () {
            return new TshirtIdIsNaN();
        };
        return TshirtIdIsNaN;
    }(Result_js_1.Result));
    DomainError.TshirtIdIsNaN = TshirtIdIsNaN;
})(DomainError || (exports.DomainError = DomainError = {}));
