export class getAllTshirts {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const data = await this.repository.find();
        const tshirts = data.filter(tshirt => tshirt.active);
        return tshirts;
    }
}
