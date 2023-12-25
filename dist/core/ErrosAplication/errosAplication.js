import { Result } from "../errorHandling/Result.js";
export var AppError;
(function (AppError) {
    class UnexpectedError extends Result {
        constructor(error) {
            super(false, {
                message: "an unexpected error curred",
                error
            });
        }
        static create(error) {
            return new UnexpectedError(error);
        }
    }
    AppError.UnexpectedError = UnexpectedError;
})(AppError || (AppError = {}));
export var DomainError;
(function (DomainError) {
    class ColorInvalidError extends Result {
        constructor() {
            super(false, "a cor informada não está disponivel!");
        }
        static create() {
            return new ColorInvalidError();
        }
    }
    DomainError.ColorInvalidError = ColorInvalidError;
    class SizeInvalidError extends Result {
        constructor() {
            super(false, "tamanho informado inválido");
        }
        static create() {
            return new SizeInvalidError();
        }
    }
    DomainError.SizeInvalidError = SizeInvalidError;
    class TshirtIsNotExist extends Result {
        constructor() {
            super(false, "a camisa não existe");
        }
        static create() {
            return new TshirtIsNotExist();
        }
    }
    DomainError.TshirtIsNotExist = TshirtIsNotExist;
    class TshirtIsNotActive extends Result {
        constructor() {
            super(false, "a camisa não esta ativada");
        }
        static create() {
            return new TshirtIsNotActive();
        }
    }
    DomainError.TshirtIsNotActive = TshirtIsNotActive;
    class TshirtIdIsNaN extends Result {
        constructor() {
            super(false, "id precisa ser um numero");
        }
        static create() {
            return new TshirtIdIsNaN();
        }
    }
    DomainError.TshirtIdIsNaN = TshirtIdIsNaN;
})(DomainError || (DomainError = {}));
