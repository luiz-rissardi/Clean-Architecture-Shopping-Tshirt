import { Result } from "../errorHandling/Result.js";
import { left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";
export class Tshirt {
    constructor(size, color, price, marca, quantity) {
        this.active = true;
        this.id = Math.floor(Math.random() * 100000 + 1);
        this.color = color;
        this.marca = marca;
        this.size = size.toUpperCase();
        this.price = price;
        this.quantity = quantity;
    }
    static build(size, color, price, marca, quantity) {
        if (!this.colorIsOk(color))
            return left(DomainError.ColorInvalidError.create());
        if (!this.sizeIsOk(size))
            return left(DomainError.SizeInvalidError.create());
        return right(Result.ok(new Tshirt(size, color, price, marca, quantity)));
    }
    static colorIsOk(color) {
        return ["black", "blue", "green", "white"].includes(color)
            ? true
            : false;
    }
    static sizeIsOk(size) {
        return ["M", "P", "G"].includes(size.toUpperCase())
            ? true
            : false;
    }
}
