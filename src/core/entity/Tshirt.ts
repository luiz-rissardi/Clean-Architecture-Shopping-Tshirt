import { Result } from "../../infra/errorHandling/Result.js";
import { Either, left, right } from "../Either/either.js";
import { DomainError } from "../ErrosAplication/errosAplication.js";

export class Tshirt {
    size: string;
    color: string;
    price: number;
    marca: string;
    quantity: number;
    id: number;
    active: boolean;

    constructor(size: string, color: string, price: number, marca: string, quantity: number) {
        this.active = true;
        this.id = Math.floor(Math.random() * 100000 + 1);
        this.color = color;
        this.marca = marca;
        this.size = size.toUpperCase();
        this.price = price;
        this.quantity = quantity;
    }

    static build(size: string, color: string, price: number, marca: string, quantity: number)
        : Either<
            DomainError.ColorInvalidError |
            DomainError.SizeInvalidError
            ,
            Result<Tshirt>
        > {
        if (!this.colorIsOk(color))
            return left(DomainError.ColorInvalidError.create())

        if (!this.sizeIsOk(size))
            return left(DomainError.SizeInvalidError.create())

        return right(Result.ok<Tshirt>(new Tshirt(size, color, price, marca, quantity)));
    }

    private static colorIsOk(color: string) {
        return ["black", "blue", "green", "white"].includes(color)
            ? true
            : false
    }

    private static sizeIsOk(size: string) {
        return ["M", "P", "G"].includes(size.toUpperCase())
            ? true
            : false
    }
}