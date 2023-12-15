

export class Result<T>{

    public isSuccess: boolean;
    public isFailure: boolean;
    public error: T | string;
    private value: T;

    constructor(isSuccess: boolean, error: T | string, value?: T) {
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

    getValue(): T {
        if (this.isSuccess) {
            return this.value;
        }
        throw new Error("Cant retrieve the value from a failed result.");
    }

    static ok<T>(value: T): Result<T> {
        return new Result<T>(true, null, value);
    }

    static fail<T>(error: T | string): Result<T> {
        return new Result(false, error);
    }

}