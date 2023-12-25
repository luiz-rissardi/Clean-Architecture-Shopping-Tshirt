import { BaseController } from "./base/baseController.js";
export class TshirtController extends BaseController {
    constructor(useCases) {
        super();
        this.useCases = useCases;
    }
    async getAllTshirts() {
        try {
            const result = await this.useCases.getAllTshirt.execute();
            return this.ok("dados buscados com sucesso", result);
        }
        catch (error) {
            return this.InternalServerError(error);
        }
    }
    async getByIdTshirt(params, body) {
        try {
            const { id } = params;
            const result = await this.useCases.getTshirt.execute(id);
            if (result.isRight()) {
                return this.ok("dados buscados com sucesso", result.value.getValue());
            }
            return this.badRequest(result.value.error);
        }
        catch (error) {
            return this.InternalServerError(error);
        }
    }
    async insertTshirt(params, body) {
        try {
            const { tshirt } = body;
            const result = await this.useCases.createTshirt.execute(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity, tshirt.type);
            if (result.isRight()) {
                return this.ok("camiseta inserida com sucesso", result.value.getValue());
            }
            else {
                return this.badRequest(result.value.error);
            }
        }
        catch (error) {
            return this.InternalServerError(error);
        }
    }
    async updateTshirt(params, body) {
        const { tshirt } = body;
        try {
            const result = await this.useCases.putTshirt.execute(tshirt.id, tshirt);
            if (result.isRight()) {
                return this.ok("camisa atualizada com sucesso!");
            }
            else {
                return this.badRequest(result.value.error);
            }
        }
        catch (error) {
            return this.InternalServerError(error);
        }
    }
    async inactiveTshirt(params, body) {
        const { id, tshirt } = body;
        try {
            const resolve = await this.useCases.inactiveTshirt.execute(tshirt);
            if (resolve.isRight()) {
                return this.ok("camisa inativada com sucesso!");
            }
            else {
                return this.badRequest(resolve.value.error);
            }
        }
        catch (error) {
            this.InternalServerError(error);
        }
    }
}
