"use strict";
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
exports.PutTshirt = void 0;
var Result_js_1 = require("../../infra/errorHandling/Result.js");
var either_js_1 = require("../Either/either.js");
var Tshirt_js_1 = require("../entity/Tshirt.js");
var TshirtSocial_js_1 = require("../entity/TshirtSocial.js");
var TshirtWithStamp_js_1 = require("../entity/TshirtWithStamp.js");
var PutTshirt = /** @class */ (function () {
    function PutTshirt(repository) {
        this.repository = repository;
    }
    PutTshirt.prototype.execute = function (id, tshirt) {
        return __awaiter(this, void 0, void 0, function () {
            var result, resolve, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (tshirt.constructor) {
                            case TshirtWithStamp_js_1.TshirtWithStamp:
                                result = TshirtWithStamp_js_1.TshirtWithStamp.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                                break;
                            case TshirtSocial_js_1.TshirtSocial:
                                result = TshirtSocial_js_1.TshirtSocial.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                                break;
                            default:
                                result = Tshirt_js_1.Tshirt.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                        }
                        if (!result.isRight()) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.repository.putOne(id, tshirt)];
                    case 2:
                        resolve = _a.sent();
                        if (resolve.isRight()) {
                            return [2 /*return*/, (0, either_js_1.right)(Result_js_1.Result.ok(resolve.value.getValue()))];
                        }
                        return [2 /*return*/, (0, either_js_1.left)(Result_js_1.Result.fail(resolve.value.error))];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, (0, either_js_1.left)(Result_js_1.Result.fail(error_1))];
                    case 4: return [2 /*return*/, (0, either_js_1.left)(result.value)];
                }
            });
        });
    };
    return PutTshirt;
}());
exports.PutTshirt = PutTshirt;
