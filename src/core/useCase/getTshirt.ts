import { Repository } from "../../infra/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";

export class GetTshirt{
    constructor(private tshirtRepository:Repository){
    }

    async execute(tshirtId:number):Promise<Tshirt | undefined>{
        const tshirt = await this.tshirtRepository.findById(tshirtId);
        return tshirt.active? tshirt: undefined;
    }
}