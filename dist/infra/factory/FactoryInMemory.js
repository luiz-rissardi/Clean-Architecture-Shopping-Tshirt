import { TshirtController } from "../../controllers/tshirtController.js";
import { CreateTshirt } from "../../core/useCase/createTshirt.js";
import { GetAllTshirts } from "../../core/useCase/getAllTshirt.js";
import { GetTshirt } from "../../core/useCase/getTshirt.js";
import { InactiveTshirt } from "../../core/useCase/inactiveTshirt.js";
import { PutTshirt } from "../../core/useCase/putTshirt.js";
import { SellTshirt } from "../../core/useCase/sellTshirts.js";
import { TshirtRepositoryInMemory } from "../repository/TshirtRepositoryInMemory.js";
export class FactoryTshirtController {
    static createInstance() {
        const repository = new TshirtRepositoryInMemory(new Map());
        const useCases = {
            createTshirt: new CreateTshirt(repository),
            getAllTshirt: new GetAllTshirts(repository),
            getTshirt: new GetTshirt(repository),
            putTshirt: new PutTshirt(repository),
            inactiveTshirt: new InactiveTshirt(repository),
            sellTshirts: new SellTshirt(repository)
        };
        return new TshirtController(useCases);
    }
}
