import { Tshirt } from "../../../core/entity/Tshirt.js";

export abstract class Repository {
    abstract findById(id:number):Promise<Tshirt>;
    abstract find(): Promise<Tshirt[]>;
    abstract putOne(tshirt:Tshirt): Promise<boolean>;
    abstract insertOne(tshirt:Tshirt):Promise<Tshirt>;
    abstract putMany(tshirts:Tshirt[]):Promise<boolean>;
}