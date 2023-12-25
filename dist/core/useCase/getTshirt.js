import { left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
import { Result } from "../errorHandling/Result.js";
export class GetTshirt {
    constructor(tshirtRepository) {
        this.tshirtRepository = tshirtRepository;
    }
    async execute(tshirtId) {
        try {
            if (!Number.isNaN(tshirtId)) {
                const result = await this.tshirtRepository.findById(tshirtId);
                if (result.isRight()) {
                    return right(Result.ok(result.value.getValue()));
                }
                else {
                    return left(Result.fail(result.value.error));
                }
            }
            return left(Result.fail(DomainError.TshirtIdIsNaN.create()));
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
