import { Result } from "../errorHandling/Result.js";
import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Either, left, right } from "../Either/either.js";
import { AppError, DomainError } from "../ErrosAplication/errosAplication.js";
import { Tshirt } from "../entity/Tshirt.js";
import { TshirtSocial } from "../entity/TshirtSocial.js";
import { TshirtWithStamp } from "../entity/TshirtWithStamp.js";

type Response = Either<
    DomainError.ColorInvalidError |
    DomainError.SizeInvalidError |
    DomainError.TshirtIsNotExist
    ,
    Result<any>
>

export class PutTshirt {
    constructor(private repository: Repository) {
    }

    async execute(id: number, tshirt: Tshirt | TshirtSocial | TshirtWithStamp): Promise<Response> {
        let result: Either<
            DomainError.ColorInvalidError |
            DomainError.SizeInvalidError | 
            DomainError.TshirtIsNotExist
            ,
            Result<any>
        >
        switch (tshirt.constructor) {
            case TshirtWithStamp:
                result = TshirtWithStamp.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                break;
            case TshirtSocial:
                result = TshirtSocial.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity);
                break;
            default:
                result = Tshirt.build(tshirt.size, tshirt.color, tshirt.price, tshirt.marca, tshirt.quantity)
        }

        if (result.isRight()) {
            try {
                const resolve = await this.repository.putOne(id, tshirt);
                if(resolve.isRight()){
                    return right(Result.ok(resolve.value.getValue()));
                }
                return left(Result.fail(resolve.value.error))
            } catch (error) {
                return left(Result.fail(error))
            }
        }
        return left(result.value);
    }
}