"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellTshirt = void 0;
var either_js_1 = require("../Either/either.js");
var errosAplication_js_1 = require("../ErrosAplication/errosAplication.js");
var Result_js_1 = require("../../infra/errorHandling/Result.js");
var SellTshirt = /** @class */ (function () {
    function SellTshirt(repository) {
        this.repository = repository;
    }
    SellTshirt.prototype.execute = function (sells) {
        return __awaiter(this, void 0, void 0, function () {
            var tshirtsOfData_1, tshirtsMapAfetrSubstraction, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.find()];
                    case 1:
                        tshirtsOfData_1 = _a.sent();
                        if (this.tshirtsIdisValid(sells)) {
                            return [2 /*return*/, (0, either_js_1.left)(errosAplication_js_1.DomainError.TshirtIdIsNaN.create())];
                        }
                        if (this.areAllTshirtsValid(tshirtsOfData_1, sells)) {
                            return [2 /*return*/, (0, either_js_1.left)(errosAplication_js_1.DomainError.TshirtIsNotExist.create())];
                        }
                        tshirtsMapAfetrSubstraction = sells
                            .map(function (sell) {
                            var tshirtmapSubstarction;
                            for (var _i = 0, tshirtsOfData_2 = tshirtsOfData_1; _i < tshirtsOfData_2.length; _i++) {
                                var tshirt = tshirtsOfData_2[_i];
                                if (sell.tshirtId == tshirt.id) {
                                    tshirtmapSubstarction = __assign(__assign({}, tshirt), { quantity: tshirt.quantity - sell.quantity });
                                    break;
                                }
                            }
                            return tshirtmapSubstarction;
                        });
                        this.repository.putMany(tshirtsMapAfetrSubstraction);
                        return [2 /*return*/, (0, either_js_1.right)(Result_js_1.Result.ok("dados vendidos com sucesso"))];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SellTshirt.prototype.tshirtsIdisValid = function (sells) {
        return sells
            .map(function (_a) {
            var tshirtId = _a.tshirtId;
            if (!Number.isNaN(Number(tshirtId))) {
                return true;
            }
            return false;
        })
            .includes(false);
    };
    SellTshirt.prototype.areAllTshirtsValid = function (tshirts, sells) {
        var sellsIdExist = [];
        var isValid = !sells
            .map(function (sell, index) {
            sellsIdExist[index] = false;
            for (var _i = 0, tshirts_1 = tshirts; _i < tshirts_1.length; _i++) {
                var tshirt = tshirts_1[_i];
                if (sell.tshirtId == (tshirt === null || tshirt === void 0 ? void 0 : tshirt.id)) {
                    sellsIdExist.push(true);
                    break;
                }
            }
            return sellsIdExist[index];
        }).includes(false);
        return isValid;
    };
    return SellTshirt;
}());
exports.SellTshirt = SellTshirt;
