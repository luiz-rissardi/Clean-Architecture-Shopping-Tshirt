import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Tshirt } from "../entity/Tshirt.js";


export class SellTshirt {
    constructor(private repository: Repository) {
    }

    async execute(tshirtSelled: Tshirt[]) {
        const tshirtsOfData = (await this.repository.find())
            .filter(tshirt => tshirt.active);

        const tshirtsOfDataAfterSubstraction = tshirtsOfData
            .map((tshirt: Tshirt) => {
                let obj:Tshirt = tshirt;
                
                tshirtSelled.forEach((tshirtSelled: Tshirt) => {
                    if (tshirtSelled.id === tshirt.id)
                        obj.quantity = tshirt.quantity - tshirtSelled.quantity;
                });

                return obj;
            })
        console.log(tshirtsOfDataAfterSubstraction);
    }
}

