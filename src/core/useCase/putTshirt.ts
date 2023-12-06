import { Repository } from "../../infra/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";


export class PutTshirt{
    constructor(private repository:Repository) {
    }

    async execute(tshirt:Tshirt){
        return await this.repository.putOne(tshirt);
    }
}