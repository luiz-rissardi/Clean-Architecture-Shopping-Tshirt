import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";

export class GetTshirt {
    constructor(private tshirtRepository: Repository) {
    }

    async execute(tshirtId: number): Promise<Tshirt | undefined> {
        try {
            const tshirt = await this.tshirtRepository.findById(tshirtId);
            return tshirt
        } catch (error) {
            throw new Error(error.message)
        }
    }
}