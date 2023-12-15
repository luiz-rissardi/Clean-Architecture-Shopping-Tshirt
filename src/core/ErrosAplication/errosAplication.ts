
export namespace AppError {
    export class UnexpectedError {
        static errorMessage: string = "an unexpected error curred";
    }

    export class ColorInvalidError {
        static errorMessage: string = "a cor informada não está disponivel!"
    }

    export class SizeInvalidError {
        static errorMessage: string = "tamanho informado inválido"
    }
}