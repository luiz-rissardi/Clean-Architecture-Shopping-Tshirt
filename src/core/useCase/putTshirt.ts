import { Result } from "../../infra/errorHandling/Result.js";
import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";


export class PutTshirt {
    constructor(private repository: Repository) {
    }

    async execute(id: number, tshirt: Tshirt | TshirtSocial | TshirtWithStamp): Promise<void> {
        try {
            const typeOfTshirt = tshirt["social"] === true ? "social" : tshirt["stamp"] === true ? "stamp" : "";
            let result: Result<Tshirt>
            switch (typeOfTshirt) {
                case "stamp":
                    result = TshirtWithStamp.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                    break;
                case "social":
                    result = TshirtSocial.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                    break;
                default:
                    result = Tshirt.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity)
            }

            if(result.isSuccess)
                await this.repository.putOne(id, tshirt);
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}