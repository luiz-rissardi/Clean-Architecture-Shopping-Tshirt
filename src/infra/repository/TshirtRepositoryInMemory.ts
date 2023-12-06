import { Tshirt } from "../../core/entity/Tshirt.js";
import { Repository } from "../base/TshirtRepository.js";

export class TshirtRepositoryInMemory extends Repository {

    constructor(private database: Map<number, Tshirt>) {
        super();
    }

    findById(id: number): Promise<Tshirt> {
        const tshirt = this.database.get(id);
        return Promise.resolve(tshirt);
    }

    find(): Promise<Tshirt[]> {
        const tshirts = Array.from(this.database.values());
        return Promise.resolve(tshirts);
    }

    async putOne(tshirt: Tshirt): Promise<boolean> {
        try {
            this.database.delete(tshirt.id);
            this.database.set(tshirt.id, tshirt);
            return true;
        } catch (error) {
            return false;
        }
    }

    async insertOne(tshirt: Tshirt): Promise<Tshirt> {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt))
    }

    putMany(tshirts: Tshirt[]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}