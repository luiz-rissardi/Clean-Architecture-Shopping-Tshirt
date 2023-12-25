import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";
import { Either, left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
import { Result } from "../errorHandling/Result.js";

type Response = Either<
    DomainError.TshirtIsNotExist
    ,
    Result<any>
>

export class InactiveTshirt {
    constructor(private repository: Repository) {
    }

    async execute(tshirt: Tshirt): Promise<Response> {
        tshirt.active = false;
        const result = await this.repository.putOne(tshirt.id, tshirt);
        if(result.isRight()){
            return right(Result.ok(tshirt));
        }else{
            return left(Result.fail(result.value.error))
        }
    }
}