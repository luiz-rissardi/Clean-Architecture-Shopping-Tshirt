import { Tshirt } from "./core/entity/Tshirt.js";
import { TshirtWithStamp } from "./core/entity/TshirtWithStamp.js";
import { TshirtSocial } from "./core/entity/TshirtSocial.js";
import { ShoppingCart } from "./core/entity/ShoppingCart.js";
import { FactoryUseCases } from "./infra/factory/FactoryInMemory.js";
const tshirtSocial = new TshirtSocial("M", "green", 23.9, "nike", 9);
const tshirt = new Tshirt("M", "green", 23.9, "nike", 9);
const tshirtWithStamp = new TshirtWithStamp("M", "green", 23.9, "nike", 9);
const shop = new ShoppingCart();
const UseCases = FactoryUseCases.createInstance();
async function teste() {
    shop.add(tshirt);
    shop.add(tshirt);
    shop.add(tshirt);
    shop.add(tshirt);
    const total = shop.getAllTshirts();
    console.log(total);
}
teste();
