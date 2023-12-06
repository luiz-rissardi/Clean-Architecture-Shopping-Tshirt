import { Repository } from "../../infra/base/TshirtRepository";
import { Tshirt } from "../entity/Tshirt";


export class getAllTshirts{
    constructor(private repository:Repository) {
    }

    async execute():Promise<Tshirt[]> {
        const data = await this.repository.find();
        const tshirts = data.filter(tshirt => tshirt.active);
        return tshirts;
    }
}