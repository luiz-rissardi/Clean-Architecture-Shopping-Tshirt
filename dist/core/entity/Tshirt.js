import { ValidateTshirt } from "../validate/validateTshirt.js";
export class Tshirt extends ValidateTshirt {
    constructor(size, color, price, marca, quantity) {
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
