export class TshirtService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAllTshirt() {
        const data = await this.repository.find();
        const tshirts = data.filter(tshirt => tshirt.active);
        return tshirts;
    }
}
