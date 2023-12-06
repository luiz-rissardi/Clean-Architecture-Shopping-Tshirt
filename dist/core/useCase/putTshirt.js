export class PutTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(tshirt) {
        return await this.repository.putOne(tshirt);
    }
}
