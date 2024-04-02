import { Repository } from "./base/TshirtRepository.js";
import { right } from "../../core/Either/either.js";
import { left } from "../../core/Either/either.js";
import { Result } from "../errorHandling/Result.js";
import { DomainError } from "../../core/ErrosAplication/errosAplication.js";
export class TshirtRepositoryInMemory extends Repository {
    constructor(database) {
        super();
        this.database = database;
        if (TshirtRepositoryInMemory.instance === null) {
            TshirtRepositoryInMemory.instance = this;
        }
        else {
            return TshirtRepositoryInMemory.instance;
        }
    }
    async findById(id) {
        const tshirt = this.database.get(Number(id));
        if (tshirt != null && tshirt !== undefined) {
            if (tshirt.active) {
                return right(Result.ok(tshirt));
            }
            return left(DomainError.TshirtIsNotActive.create());
        }
        return left(DomainError.TshirtIsNotExist.create());
    }
    find() {
        const tshirts = Array.from(this.database.values()).filter(tshirt => tshirt.active);
        return Promise.resolve(tshirts);
    }
    async putOne(id, tshirt) {
        if (this.database.has(id)) {
            this.database.delete(id);
            this.database.set(id, tshirt);
            return right(Result.ok(tshirt));
        }
        return left(DomainError.TshirtIsNotExist.create());
    }
    async insertOne(tshirt) {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt));
    }
    putMany(tshirts) {
        tshirts.forEach(tshirt => this.putOne(tshirt.id, tshirt));
    }
}
TshirtRepositoryInMemory.instance = null;
