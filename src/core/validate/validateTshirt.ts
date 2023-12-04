import { Tshirt } from "../entity/Tshirt.js";


export class ValidateTshirt {

    color: string;
    size: string;

    constructor(color: string, size: string) {
        this.color = color;
        this.size = size;
    }

    protected isValidTshirt() {
        return this.colorIsOk() && this.sizeIsOk();
    }

    private colorIsOk() {
        return (this.color === "black") ||
            (this.color === "blue") ||
            (this.color === "green") ||
            (this.color === "white")
    }

    private sizeIsOk() {
        return (this.size === "M") ||
            (this.size === "P") ||
            (this.size === "G")
    }
}