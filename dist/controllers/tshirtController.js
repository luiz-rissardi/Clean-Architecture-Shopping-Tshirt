import { AppError } from "../core/ErrosAplication/errosAplication.js";
export class TshirtController {
    constructor(useCases) {
        this.useCases = useCases;
    }
    async getAllTshirts() {
        try {
            const result = await this.useCases.getAllTshirt.execute();
            return {
                message: "dados buscados com sucesso",
                result,
                statusCode: "200"
            };
        }
        catch (error) {
            return {
                message: "erro ao pegar todas as camisas",
                statusCode: 500
            };
        }
    }
    async insertTshirt(params, body) {
        try {
            const { tshirt } = body;
            const result = await this.useCases.createTshirt.execute(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity, tshirt.type);
            if (result.isSuccess)
                return {
                    message: "dados inseridos com sucesso",
                    data: result.getValue(),
                    statusCode: 200
                };
            else
                return {
                    message: result.error,
                    statusCode: 400
                };
        }
        catch (error) {
            return {
                message: AppError.UnexpectedError.errorMessage,
                statusCode: 500
            };
        }
    }
    async updateTshirt(params, body) {
        const { tshirt } = body;
        try {
            await this.useCases.putTshirt.execute(tshirt.id, tshirt);
            return {
                message: "camisa atualizada com sucesso!",
                statusCode: 200
            };
        }
        catch (error) {
            return {
                message: error.message,
                statusCode: 500
            };
        }
    }
}
