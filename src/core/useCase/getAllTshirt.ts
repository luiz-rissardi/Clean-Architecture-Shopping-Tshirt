import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";


export class GetAllTshirts{
    constructor(private repository:Repository) {
    }

    async execute():Promise<Tshirt[]> {
        return await this.repository.find();
    }
}