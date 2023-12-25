
export type Either<L,A> = Left<L,A> | Right<L,A>


export class Left<L, A>{
    readonly value: L;

    constructor(value: L) {
        this.value = value;
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }
}

export class Right<L, A>{
    readonly value: A;

    constructor(value: A) {
        this.value = value;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }
}

export const left = <L,A>(value:L)=>{
    return new Left(value);
} 

export const right = <L,A>(value:A)=>{
    return new Right(value);
}