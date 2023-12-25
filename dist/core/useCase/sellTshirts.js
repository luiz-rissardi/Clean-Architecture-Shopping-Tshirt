import { left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
import { Result } from "../errorHandling/Result.js";
export class SellTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(sells) {
        try {
            const tshirtsOfData = await this.repository.find();
            if (this.tshirtsIdisValid(sells)) {
                return left(DomainError.TshirtIdIsNaN.create());
            }
            if (this.areAllTshirtsValid(tshirtsOfData, sells)) {
                return left(DomainError.TshirtIsNotExist.create());
            }
            const tshirtsMapAfetrSubstraction = sells
                .map(sell => {
                let tshirtmapSubstarction;
                for (const tshirt of tshirtsOfData) {
                    if (sell.tshirtId == tshirt.id) {
                        tshirtmapSubstarction = { ...tshirt, quantity: tshirt.quantity - sell.quantity };
                        break;
                    }
                }
                return tshirtmapSubstarction;
            });
            this.repository.putMany(tshirtsMapAfetrSubstraction);
            return right(Result.ok("dados vendidos com sucesso"));
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    tshirtsIdisValid(sells) {
        return sells
            .map(({ tshirtId }) => {
            if (!Number.isNaN(Number(tshirtId))) {
                return true;
            }
            return false;
        })
            .includes(false);
    }
    areAllTshirtsValid(tshirts, sells) {
        const sellsIdExist = [];
        let isValid = !sells
            .map((sell, index) => {
            sellsIdExist[index] = false;
            for (const tshirt of tshirts) {
                if (sell.tshirtId == tshirt?.id) {
                    sellsIdExist.push(true);
                    break;
                }
            }
            return sellsIdExist[index];
        }).includes(false);
        return isValid;
    }
}
