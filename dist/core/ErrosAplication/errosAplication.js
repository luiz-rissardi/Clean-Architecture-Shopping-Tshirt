export var AppError;
(function (AppError) {
    class UnexpectedError {
    }
    UnexpectedError.errorMessage = "an unexpected error curred";
    AppError.UnexpectedError = UnexpectedError;
    class ColorInvalidError {
    }
    ColorInvalidError.errorMessage = "a cor informada não está disponivel!";
    AppError.ColorInvalidError = ColorInvalidError;
    class SizeInvalidError {
    }
    SizeInvalidError.errorMessage = "tamanho informado inválido";
    AppError.SizeInvalidError = SizeInvalidError;
})(AppError || (AppError = {}));
