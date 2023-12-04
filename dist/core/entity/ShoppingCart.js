export class ShoppingCart {
    constructor() {
        this.products = new Map;
    }
    add(tshirt) {
        if (!this.products.has(tshirt.id)) {
            tshirt.quantity = 1;
            this.products.set(tshirt.id, tshirt);
        }
        else {
            const tshirtExist = this.products.get(tshirt.id);
            tshirtExist.quantity += 1;
            this.remove(tshirt);
            this.products.set(tshirt.id, tshirtExist);
        }
    }
    getAllTshirts() {
        return Array.from(this.products.values()).flat(Infinity);
    }
    remove(tshirt) {
        this.products.delete(tshirt.id);
    }
}
