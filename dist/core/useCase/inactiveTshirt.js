import { left, right } from "../Either/either.js";
import { Result } from "../errorHandling/Result.js";
export class InactiveTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(tshirt) {
        tshirt.active = false;
        const result = await this.repository.putOne(tshirt.id, tshirt);
        if (result.isRight()) {
            return right(Result.ok(tshirt));
        }
        else {
            return left(Result.fail(result.value.error));
        }
    }
}
