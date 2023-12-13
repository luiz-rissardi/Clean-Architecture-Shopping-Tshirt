const INVALID_MESSAGES = {
    COLOR_IS_FORBIDEN: `a cor da camise é de uma cor proibida`,
    SIZE_IS_FORBIDEN: `o tamanho da camisa é proibido`
}

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
        this.validateTshirt();
    }

    protected validateTshirt() {
        const colorValidation = this.colorIsOk();
        const sizeValidation = this.sizeIsOk();
        if (!colorValidation.isValid || !sizeValidation.isValid) {
            const messageError = `${colorValidation?.message || ""} and ${sizeValidation.message}`;
            throw new Error(messageError) 
        }
    }

    private colorIsOk() {
        return ["black", "blue", "green", "white"].includes(this.color)
            ? { isValid: true }
            : { isValid: false, message: INVALID_MESSAGES.COLOR_IS_FORBIDEN };
    }

    private sizeIsOk() {
        return ["M", "P", "G"].includes(this.size)
            ? { isValid: true }
            : { isValid: false, message: INVALID_MESSAGES.SIZE_IS_FORBIDEN };
    }
}