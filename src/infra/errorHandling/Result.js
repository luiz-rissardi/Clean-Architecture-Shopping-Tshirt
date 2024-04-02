"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result(isSuccess, error, value) {
        if (isSuccess && error)
            throw new Error("is not possible have error message and be successful");
        if (!isSuccess && !error)
            throw new Error("It is not possible to have a failure and not have an error message");
        this.error = error;
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.value = value;
        Object.freeze(this);
    }
    Result.prototype.getValue = function () {
        if (this.isSuccess) {
            return this.value;
        }
        throw new Error("Cant retrieve the value from a failed result.");
    };
    Result.ok = function (value) {
        return new Result(true, null, value);
    };
    Result.fail = function (error) {
        return new Result(false, error);
    };
    return Result;
}());
exports.Result = Result;
