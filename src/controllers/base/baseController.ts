import { AppError } from "../../core/ErrosAplication/errosAplication.js";



export class BaseController{
    protected ok(message:string,data:any = null) {
        return {
            message,
            data,
            statusCode: 200
        };
    }

    protected badRequest(message: any) {
        return {
            message,
            statusCode: 400
        };
    }

    protected InternalServerError(error: any) {
        return {
            message: AppError.UnexpectedError.create(error.message).error,
            statusCode: 500
        }
    }
}