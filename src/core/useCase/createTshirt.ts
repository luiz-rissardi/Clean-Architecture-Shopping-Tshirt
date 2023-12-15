import { Result } from "../../infra/errorHandling/Result.js";
import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";

export class CreateTshirt {
    constructor(private repository: Repository) {
    }

    async execute(size: string, color: string, price: number, marca: string, quantity: number, type: string = null): Promise<Result<Tshirt>> {
        let result: Result<Tshirt>;
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
