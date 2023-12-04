import { Tshirt } from "./Tshirt.js";
export class TshirtWithStamp extends Tshirt {
    constructor(size, color, price, marca, quantity) {
        super(size, color, price, marca, quantity);
        this.stamp = true;
        this.addPrice();
    }
    addPrice() {
        this.price += 10;
    }
}
