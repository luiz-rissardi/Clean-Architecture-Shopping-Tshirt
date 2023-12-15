import { CreateTshirt } from "./createTshirt.js";
import { GetAllTshirts } from "./getAllTshirt.js";
import { GetTshirt } from "./getTshirt.js";
import { InactiveTshirt } from "./inactiveTshirt.js";
import { PutTshirt } from "./putTshirt.js";
import { SellTshirt } from "./sellTshirts.js";

export interface UseCases {
    createTshirt: CreateTshirt,
    getAllTshirt: GetAllTshirts,
    getTshirt: GetTshirt,
    putTshirt: PutTshirt,
    inactiveTshirt: InactiveTshirt,
    sellTshirts: SellTshirt
}