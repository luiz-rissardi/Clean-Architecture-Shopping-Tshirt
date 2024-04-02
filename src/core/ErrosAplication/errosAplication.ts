import { Result } from "../../infra/errorHandling/Result.js";

interface DomainError {
    message: string;
    error?: any;
}

export namespace AppError {
    export class UnexpectedError extends Result<DomainError> {
        constructor(error: any) {
            super(false, {
                message: "an unexpected error curred",
                error
            })
        }

        static create(error: any) {
            return new UnexpectedError(error);
        }
    }
}

export namespace DomainError {
    export class ColorInvalidError extends Result<DomainError> {
        constructor() {
            super(false,
                "a cor informada não está disponivel!"
            )
        }

        static create() {
            return new ColorInvalidError();
        }
    }

    export class SizeInvalidError extends Result<DomainError> {
        constructor() {
            super(false,
                "tamanho informado inválido"
            )
        }

        static create() {
            return new SizeInvalidError();
        }
    }

    export class TshirtIsNotExist extends Result<DomainError> {
        constructor() {
            super(false,
                "a camisa não existe"
            )
        }

        static create() {
            return new TshirtIsNotExist();
        }
    }

    export class TshirtIsNotActive extends Result<DomainError> {
        constructor() {
            super(false,
                "a camisa não esta ativada"
            )
        }

        static create() {
            return new TshirtIsNotActive();
        }
    }

    export class TshirtIdIsNaN extends Result<DomainError> {
        constructor() {
            super(false,
                "id precisa ser um numero"
            )
        }

        static create(){
            return new TshirtIdIsNaN();
        }
    }
}