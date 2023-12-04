import { Tshirt } from "./core/entity/Tshirt.js";
import { TshirtWithStamp } from "./core/entity/TshirtWithStamp.js";
import { TshirtSocial } from "./core/entity/TshirtSocial.js";
import { ShoppingCart } from "./core/entity/ShoppingCart.js";

const teste = new TshirtSocial("M","green",23.9,"nike",9);
const teste2 = new Tshirt("M","green",23.9,"nike",9);
const teste3 = new TshirtWithStamp("M","green",23.9,"nike",9);

const shop = new ShoppingCart()

shop.add(teste);
shop.add(teste);
shop.add(teste3);

console.log(shop.getAllTshirts());