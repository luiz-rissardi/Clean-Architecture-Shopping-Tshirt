import { Repository } from "../base/TshirtRepository.js";
export class TshirtRepositoryInMemory extends Repository {
    constructor(database) {
        super();
        this.database = database;
    }
    findById(id) {
        const tshirt = this.database.get(id);
        return Promise.resolve(tshirt);
    }
    find() {
        const tshirts = Array.from(this.database.values());
        return Promise.resolve(tshirts);
    }
    async putOne(tshirt) {
        try {
            this.database.delete(tshirt.id);
            this.database.set(tshirt.id, tshirt);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async insertOne(tshirt) {
        this.database.set(tshirt.id, tshirt);
        return new Promise(resolve => resolve(tshirt));
    }
    putMany(tshirts) {
        throw new Error("Method not implemented.");
    }
}
