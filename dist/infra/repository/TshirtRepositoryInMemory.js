import { Repository } from "./base/TshirtRepository.js";
export class TshirtRepositoryInMemory extends Repository {
    constructor(database) {
        super();
        this.database = database;
    }
    findById(id) {
        const tshirt = this.database.get(id);
        if (!tshirt.active)
            throw new Error("camisa inativada");
        return Promise.resolve(tshirt);
    }
    find() {
        const tshirts = Array.from(this.database.values()).filter(tshirt => tshirt.active);
        return Promise.resolve(tshirts);
    }
    async putOne(id, tshirt) {
        if (this.database.has(id)) {
            this.database.delete(id);
            this.database.set(tshirt.id, tshirt);
            return;
        }
        throw new Error("camisa não existe");
    }
    async insertOne(tshirt) {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt));
    }
    putMany(tshirts) {
        return;
    }
}
