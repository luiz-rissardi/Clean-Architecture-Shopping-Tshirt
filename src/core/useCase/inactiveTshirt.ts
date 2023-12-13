import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";


export class InactiveTshirt {
    constructor(private repository: Repository) {
    }

    async execute(tshirt: Tshirt): Promise<boolean> {
        tshirt.active = false;
        return this.repository.putOne(tshirt);
    }
}