import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";

export class CreateTshirt {
    constructor(private repository: Repository) {
    }

    async execute(size: string, color: string, price: number, marca: string, quantity: number, type: string = null) {
        try {
            let tshirt: Tshirt;
            switch (type) {
                case "withStamp":
                    tshirt = new TshirtWithStamp(size, color, price, marca, quantity);
                    break;
                case "social":
                    tshirt = new TshirtSocial(size, color, price, marca, quantity);
                    break;
                default:
                    tshirt = new Tshirt(size, color, price, marca, quantity);
                    break;
            }
            return await this.repository.insertOne(tshirt);
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
