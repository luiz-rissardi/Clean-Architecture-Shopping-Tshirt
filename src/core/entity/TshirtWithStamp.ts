import { Tshirt } from "./Tshirt.js";

export class TshirtWithStamp extends Tshirt {
    stamp: boolean;

    constructor(size: string, color: string, price: number, marca: string, quantity: number) {
        super(size, color, price, marca, quantity);
        this.stamp = true;
        this.addPrice();
    }

    private addPrice() {
        this.price += 10;
    }
}