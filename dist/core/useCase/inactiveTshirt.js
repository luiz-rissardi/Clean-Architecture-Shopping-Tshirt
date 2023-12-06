export class InactiveTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(tshirt) {
        tshirt.active = false;
        return this.repository.putOne(tshirt);
    }
}
