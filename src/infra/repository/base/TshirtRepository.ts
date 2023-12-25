import { Either } from "../../../core/Either/either.js";
import { DomainError } from "../../../core/ErrosAplication/errosAplication.js";
import { Tshirt } from "../../../core/entity/Tshirt.js";
import { Result } from "../../../core/errorHandling/Result.js";

export abstract class Repository {
    abstract findById(id:number):Promise<Either<any,Result<Tshirt>>>;
    abstract find(): Promise<Tshirt[]>;
    abstract putOne(id:number,tshirt:Tshirt):Promise<Either<DomainError.TshirtIsNotExist ,Result<Tshirt>>>;
    abstract insertOne(tshirt:Tshirt):Promise<Tshirt>;
    abstract putMany(tshirts:Tshirt[]):void;
}