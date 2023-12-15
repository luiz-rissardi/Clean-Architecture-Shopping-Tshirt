import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";
export class CreateTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(size, color, price, marca, quantity, type = null) {
        let result;
        switch (type) {
            case "stamp":
                result = TshirtWithStamp.build(size, color, price, marca, quantity);
                break;
            case "social":
                result = TshirtSocial.build(size, color, price, marca, quantity);
                break;
            default:
                result = Tshirt.build(size, color, price, marca, quantity);
        }
        if (result.isSuccess)
            await this.repository.insertOne(result.getValue());
        return result;
    }
}
