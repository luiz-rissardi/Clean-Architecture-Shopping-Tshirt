import { Result } from "../errorHandling/Result.js";
import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Either, left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";

type Response = Either<
    DomainError.ColorInvalidError |
    DomainError.SizeInvalidError
    ,
    Result<Tshirt>
>


export class CreateTshirt {
    constructor(private repository: Repository) {
    }

    async execute(size: string, color: string, price: number, marca: string, quantity: number, type: string = null)
        : Promise<Response> {
        let result: Either<
            DomainError.ColorInvalidError |
            DomainError.SizeInvalidError
            ,
            Result<any>>;
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

        if (result.isRight()) {
            await this.repository.insertOne(result.value.getValue());
            return right(Result.ok(result.value.getValue()));
        }
        return left(Result.fail(result.value.error));
    }
}
