export class ValidateTshirt {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
    isValidTshirt() {
        return this.colorIsOk() && this.sizeIsOk();
    }
    colorIsOk() {
        return (this.color === "black") ||
            (this.color === "blue") ||
            (this.color === "green") ||
            (this.color === "white");
    }
    sizeIsOk() {
        return (this.size === "M") ||
            (this.size === "P") ||
            (this.size === "G");
    }
}
