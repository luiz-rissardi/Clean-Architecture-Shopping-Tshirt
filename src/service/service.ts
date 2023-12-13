import { Repository } from "../infra/repository/base/TshirtRepository.js";

export class TshirtService {
    constructor(private repository: Repository) {
    }

    async getAllTshirt() {
        const data = await this.repository.find();
        const tshirts = data.filter(tshirt => tshirt.active);
        return tshirts;
    }
}