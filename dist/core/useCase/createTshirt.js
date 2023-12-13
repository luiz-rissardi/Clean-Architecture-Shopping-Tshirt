import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";
export class CreateTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(size, color, price, marca, quantity, type = null) {
        try {
            let tshirt;
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
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
