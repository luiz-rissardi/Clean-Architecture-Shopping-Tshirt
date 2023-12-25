import { AppError } from "../../core/ErrosAplication/errosAplication.js";
export class BaseController {
    ok(message, data = null) {
        return {
            message,
            data,
            statusCode: 200
        };
    }
    badRequest(message) {
        return {
            message,
            statusCode: 400
        };
    }
    InternalServerError(error) {
        return {
            message: AppError.UnexpectedError.create(error.message).error,
            statusCode: 500
        };
    }
}
