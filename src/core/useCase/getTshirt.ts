import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Either, left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
import { Result } from "../errorHandling/Result.js";


type Response = Either<
    DomainError.TshirtIsNotActive |
    DomainError.TshirtIsNotExist |
    DomainError.TshirtIdIsNaN 
    ,
    Result<any>
>

export class GetTshirt {
    constructor(private tshirtRepository: Repository) {
    }

    async execute(tshirtId: number): Promise<Response> {
        try {
            if (!Number.isNaN(tshirtId)) {
                const result: Either<
                    DomainError.TshirtIsNotActive |
                    DomainError.TshirtIsNotExist
                    ,
                    Result<any>
                > = await this.tshirtRepository.findById(tshirtId);
                if (result.isRight()) {
                    return right(Result.ok(result.value.getValue()))
                } else {
                    return left(Result.fail(result.value.error))
                }
            }
            return left(Result.fail(DomainError.TshirtIdIsNaN.create()));
        } catch (error) {
            throw new Error(error.message)
        }
    }
}