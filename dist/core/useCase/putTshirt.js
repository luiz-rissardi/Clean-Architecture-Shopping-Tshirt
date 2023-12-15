import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";
export class PutTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, tshirt) {
        try {
            const typeOfTshirt = tshirt["social"] === true ? "social" : tshirt["stamp"] === true ? "stamp" : "";
            let result;
            switch (typeOfTshirt) {
                case "stamp":
                    result = TshirtWithStamp.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                    break;
                case "social":
                    result = TshirtSocial.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                    break;
                default:
                    result = Tshirt.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
            }
            if (result.isSuccess)
                await this.repository.putOne(id, tshirt);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
