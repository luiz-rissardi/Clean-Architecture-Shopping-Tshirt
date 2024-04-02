import { Tshirt } from "../../core/entity/Tshirt.js";
import { Repository } from "./base/TshirtRepository.js";
import { Either, right } from "../../core/Either/either.js";
import { left } from "../../core/Either/either.js";
import { Result } from "../errorHandling/Result.js";
import { DomainError } from "../../core/ErrosAplication/errosAplication.js";

export class TshirtRepositoryInMemory extends Repository {
    private static instance: TshirtRepositoryInMemory | null = null;
    
    constructor(private database: Map<number, Tshirt>) {
        super();
        if (TshirtRepositoryInMemory.instance === null) {
            TshirtRepositoryInMemory.instance = this;
        } else {
            return TshirtRepositoryInMemory.instance;
        }
    }

    async findById(id: number): Promise<Either<DomainError.TshirtIsNotExist | DomainError.TshirtIsNotActive, Result<Tshirt>>> {
        const tshirt = this.database.get(Number(id));
        if (tshirt != null && tshirt !== undefined) {
            if (tshirt.active) {
                return right(Result.ok<Tshirt>(tshirt));
            }
            return left(DomainError.TshirtIsNotActive.create());
        }
        return left(DomainError.TshirtIsNotExist.create());
    }

    find(): Promise<Tshirt[]> {
        const tshirts = Array.from(this.database.values()).filter(tshirt => tshirt.active)
        return Promise.resolve(tshirts);
    }

    async putOne(id: number, tshirt: Tshirt): Promise<Either<DomainError.TshirtIsNotExist, Result<any>>> {
        if (this.database.has(id)) {
            this.database.delete(id);
            this.database.set(id, tshirt);
            return right(Result.ok<Tshirt>(tshirt))
        }
        return left(DomainError.TshirtIsNotExist.create())
    }

    async insertOne(tshirt: Tshirt): Promise<Tshirt> {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt))
    }

    putMany(tshirts: Tshirt[]): void {
        tshirts.forEach(tshirt => this.putOne(tshirt.id, tshirt))
    }

}