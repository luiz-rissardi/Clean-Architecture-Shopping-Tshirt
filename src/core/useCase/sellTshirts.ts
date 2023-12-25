import { Repository } from "../../infra/repository/base/TshirtRepository.js";
import { Either, left, right } from "../Either/either.js";
import { AppError, DomainError } from "../ErrosAplication/errosAplication.js";
import { Tshirt } from "../entity/Tshirt.js";
import { Result } from "../errorHandling/Result.js";



type Response = Either<
    DomainError.TshirtIdIsNaN |
    DomainError.TshirtIsNotExist
    ,
    Result<any>
>

type Request = {
    tshirtId: number;
    quantity: number;
}

export class SellTshirt {
    constructor(private repository: Repository) {
    }

    async execute(sells: Request[]): Promise<Response> {
        try {
            const tshirtsOfData = await this.repository.find()
            if (this.tshirtsIdisValid(sells)) {
                return left(DomainError.TshirtIdIsNaN.create());
            }


            if (this.areAllTshirtsValid(tshirtsOfData, sells)) {
                return left(DomainError.TshirtIsNotExist.create())
            }

            const tshirtsMapAfetrSubstraction = sells
                .map(sell => {
                    let tshirtmapSubstarction: Tshirt;
                    for (const tshirt of tshirtsOfData) {
                        if (sell.tshirtId == tshirt.id) {
                            tshirtmapSubstarction = { ...tshirt, quantity: tshirt.quantity - sell.quantity };
                            break;
                        }
                    }
                    return tshirtmapSubstarction;
                });

            this.repository.putMany(tshirtsMapAfetrSubstraction);
            return right(Result.ok("dados vendidos com sucesso"))
        } catch (error) {
            throw new Error(error.message)
        }
    }

    private tshirtsIdisValid(sells: Request[]): boolean {
        return sells
            .map(({ tshirtId }) => {
                if (!Number.isNaN(Number(tshirtId))) {
                    return true
                }
                return false
            })
            .includes(false);

    }

    private areAllTshirtsValid(tshirts: Tshirt[], sells: Request[]): boolean {
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
            }).includes(false)
        return isValid;
    }

}

