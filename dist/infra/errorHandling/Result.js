export class Result {
    constructor(isSuccess, error, value) {
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
    getValue() {
        if (this.isSuccess) {
            return this.value;
        }
        throw new Error("Cant retrieve the value from a failed result.");
    }
    static ok(value) {
        return new Result(true, null, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
}
