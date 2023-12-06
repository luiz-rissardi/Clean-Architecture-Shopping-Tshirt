export class SellTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(tshirtSelled) {
        const tshirtsOfData = (await this.repository.find())
            .filter(tshirt => tshirt.active);
        const tshirtsOfDataAfterSubstraction = tshirtsOfData
            .map((tshirt) => {
            let obj = tshirt;
            tshirtSelled.forEach((tshirtSelled) => {
                if (tshirtSelled.id === tshirt.id)
                    obj.quantity = tshirt.quantity - tshirtSelled.quantity;
            });
            return obj;
        });
        console.log(tshirtsOfDataAfterSubstraction);
    }
}
