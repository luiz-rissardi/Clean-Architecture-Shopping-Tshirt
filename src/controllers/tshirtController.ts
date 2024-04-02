import { Either } from "../core/Either/either.js";
import { DomainError } from "../core/ErrosAplication/errosAplication.js";
import { Tshirt } from "../core/entity/Tshirt.js";
import { Result } from "../infra/errorHandling/Result.js";
import { UseCases } from "../core/useCase/usesCases.interface.js";
import { BaseController } from "./base/baseController.js";

type Response = Either<
    DomainError.ColorInvalidError |
    DomainError.SizeInvalidError
    ,
    Result<Tshirt>
>

export class TshirtController extends BaseController {
    constructor(private useCases: UseCases) {
        super();
    }

    async getAllTshirts() {
        try {
            const result = await this.useCases.getAllTshirt.execute();
            return this.ok("dados buscados com sucesso", result)
        } catch (error) {
            return this.InternalServerError(error);
        }
    }

    async getByIdTshirt(params: any, body: any) {
        try {
            const { id } = params;
            const result = await this.useCases.getTshirt.execute(id);
            if (result.isRight()) {
                return this.ok("dados buscados com sucesso", result.value.getValue());
            }
            return this.badRequest(result.value.error);
        } catch (error) {
            return this.InternalServerError(error);
        }
    }

    async insertTshirt(params: any, body: any) {
        try {
            const { tshirt } = body;
            const result: Response = await this.useCases.createTshirt.execute(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity, tshirt.type);
            if (result.isRight()) {
                return this.ok("camiseta inserida com sucesso", result.value.getValue())
            }
            else {
                return this.badRequest(result.value.error)
            }
        } catch (error) {
            return this.InternalServerError(error);
        }
    }

    async updateTshirt(params: any, body: any) {
        const { tshirt } = body;
        try {
            const result: Response = await this.useCases.putTshirt.execute(tshirt.id, tshirt);
            if (result.isRight()) {
                return this.ok("camisa atualizada com sucesso!")
            } else {
                return this.badRequest(result.value.error)
            }
        } catch (error) {
            return this.InternalServerError(error);
        }
    }

    async inactiveTshirt(params: any, body: any) {
        const { id, tshirt } = body
        try {
            const resolve = await this.useCases.inactiveTshirt.execute(tshirt);
            if (resolve.isRight()) {
                return this.ok("camisa inativada com sucesso!");
            } else {
                return this.badRequest(resolve.value.error);
            }
        } catch (error) {
            this.InternalServerError(error)
        }
    }

}