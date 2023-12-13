export class TshirtController {
    constructor(useCases) {
        this.useCases = useCases;
    }
    async getAllTshirts(params, body) {
        try {
            const data = await this.useCases.getAllTshirt.execute();
            return {
                message: "dados buscados com sucesso",
                data,
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
            const data = await this.useCases.createTshirt.execute(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity, tshirt.type);
            return {
                message: "dados inseridos com sucesso",
                data,
                statusCode: "200"
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
