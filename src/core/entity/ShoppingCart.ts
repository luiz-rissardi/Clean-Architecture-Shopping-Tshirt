import { Tshirt } from "./Tshirt.js";

export class ShoppingCart{
    private products: Map<number,Tshirt | undefined> = new Map<number,Tshirt | undefined>;

    add(tshirt:Tshirt){
        if(!this.products.has(tshirt.id)){
            tshirt.quantity = 1;
            this.products.set(tshirt.id,tshirt);
        }else{
            const tshirtExist = this.products.get(tshirt.id);
            tshirtExist.quantity += 1
            this.remove(tshirt);
            this.products.set(tshirt.id,tshirtExist);
        }
    }

    getAllTshirts(){
        return Array.from(this.products.values()).flat(Infinity);
    }

    remove(tshirt:Tshirt){
        this.products.delete(tshirt.id);
    }
}