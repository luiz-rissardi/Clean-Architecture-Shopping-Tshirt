import { Result } from "../../infra/errorHandling/Result.js";
import { left, right } from "../Either/either.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";
export class PutTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, tshirt) {
        let result;
        switch (tshirt.constructor) {
            case TshirtWithStamp:
                result = TshirtWithStamp.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                break;
            case TshirtSocial:
                result = TshirtSocial.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                break;
            default:
                result = Tshirt.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
        }
        if (result.isRight()) {
            try {
                const resolve = await this.repository.putOne(id, tshirt);
                if (resolve.isRight()) {
                    return right(Result.ok(resolve.value.getValue()));
                }
                return left(Result.fail(resolve.value.error));
            }
            catch (error) {
                return left(Result.fail(error));
            }
        }
        return left(result.value);
    }
}
