import { Tshirt } from "./Tshirt.js";

export class TshirtSocial extends Tshirt{
    social:boolean;
    constructor(size: string, color: string, price: number, marca: string, quantity: number) {
        super(size,color,price,marca,quantity);
        this.social = true;
        this.addPrice();
    }

    private addPrice(){
        this.price += 30;
    }
}