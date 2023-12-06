import { Tshirt } from "../../core/entity/Tshirt.js";
import { CreateTshirt } from "../../core/useCase/createTshirt.js";
import { getAllTshirts } from "../../core/useCase/getAllTshirt.js";
import { GetTshirt } from "../../core/useCase/getTshirt.js";
import { InactiveTshirt } from "../../core/useCase/inactiveTshirt.js";
import { PutTshirt } from "../../core/useCase/putTshirt.js";
import { SellTshirt } from "../../core/useCase/sellTshirts.js";
import { TshirtRepositoryInMemory } from "../repository/TshirtRepositoryInMemory.js";

export class FactoryUseCases{
    static createInstance(){
        const database = new Map<number,Tshirt>();
        const repository = new TshirtRepositoryInMemory(database);
        const createTshirt = new CreateTshirt(repository);
        const getTshirt = new GetTshirt(repository);
        const getAllTshirt = new getAllTshirts(repository);
        const putTshirt = new PutTshirt(repository);
        const inactiveTshirt = new InactiveTshirt(repository);
        const sellTshirts = new SellTshirt(repository);

        return {
            createTshirt,
            getAllTshirt,
            getTshirt,
            putTshirt,
            inactiveTshirt,
            sellTshirts
        }
    }
}