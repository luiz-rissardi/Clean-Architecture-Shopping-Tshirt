import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";


export class InactiveTshirt {
    constructor(private repository: Repository) {
    }

    async execute(id:number,tshirt: Tshirt): Promise<void> {
        try {
            tshirt.active = false;
            this.repository.putOne(id,tshirt);
        } catch (error) {
            throw new Error("não foi possivel inativar camisa")
        }
    }
}