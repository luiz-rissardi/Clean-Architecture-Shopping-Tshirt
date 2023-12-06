export class CreateTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(tshirt) {
        return await this.repository.insertOne(tshirt);
    }
}
