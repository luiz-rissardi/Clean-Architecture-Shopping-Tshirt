import { ValidateTshirt } from "../validate/validateTshirt.js";

export class Tshirt extends ValidateTshirt {
    size: string;
    color: string;
    price: number;
    marca: string;
    quantity: number;
    id: number;
    active: boolean;

    constructor(size: string, color: string, price: number, marca: string, quantity: number) {
        super(color, size);
        this.active = true;
        this.id = Math.floor(Math.random() * 100000 + 1);
        this.color = color;
        this.marca = marca;
        this.size = size.toUpperCase();
        this.price = price;
        this.quantity = quantity;
        if (!this.isValidTshirt())
            throw new Error("inválid T-shirt");
    }
}