import { Tshirt } from "../../core/entity/Tshirt.js";
import { Repository } from "./base/TshirtRepository.js";

export class TshirtRepositoryInMemory extends Repository {

    constructor(private database: Map<number, Tshirt>) {
        super();
    }

    findById(id: number): Promise<Tshirt> {
        const tshirt = this.database.get(id);
        if (!tshirt.active)
            throw new Error("camisa inativada")
        return Promise.resolve(tshirt);
    }

    find(): Promise<Tshirt[]> {
        const tshirts = Array.from(this.database.values()).filter(tshirt => tshirt.active)
        return Promise.resolve(tshirts);
    }

    async putOne(id: number, tshirt: Tshirt): Promise<void> {
        if (this.database.has(id)) {
            this.database.delete(id);
            this.database.set(tshirt.id, tshirt);
            return
        }
        throw new Error("camisa não existe")
    }

    async insertOne(tshirt: Tshirt): Promise<Tshirt> {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt))
    }

    putMany(tshirts: Tshirt[]): Promise<void> {
        return;
    }

}