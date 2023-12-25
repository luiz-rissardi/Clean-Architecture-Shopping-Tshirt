export class GetAllTshirts {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.find();
    }
}
