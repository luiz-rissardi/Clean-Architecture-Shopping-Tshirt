"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = void 0;
var Left = /** @class */ (function () {
    function Left(value) {
        this.value = value;
    }
    Left.prototype.isLeft = function () {
        return true;
    };
    Left.prototype.isRight = function () {
        return false;
    };
    return Left;
}());
exports.Left = Left;
var Right = /** @class */ (function () {
    function Right(value) {
        this.value = value;
    }
    Right.prototype.isLeft = function () {
        return false;
    };
    Right.prototype.isRight = function () {
        return true;
    };
    return Right;
}());
exports.Right = Right;
var left = function (value) {
    return new Left(value);
};
exports.left = left;
var right = function (value) {
    return new Right(value);
};
exports.right = right;
