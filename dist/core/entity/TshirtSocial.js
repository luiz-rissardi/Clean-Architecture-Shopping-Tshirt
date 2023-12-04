import { Tshirt } from "./Tshirt.js";
export class TshirtSocial extends Tshirt {
    constructor(size, color, price, marca, quantity) {
        super(size, color, price, marca, quantity);
        this.social = true;
        this.addPrice();
    }
    addPrice() {
        this.price += 30;
    }
}
