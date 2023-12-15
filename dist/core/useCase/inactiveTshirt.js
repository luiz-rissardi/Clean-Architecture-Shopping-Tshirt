export class InactiveTshirt {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, tshirt) {
        try {
            tshirt.active = false;
            this.repository.putOne(id, tshirt);
        }
        catch (error) {
            throw new Error("não foi possivel inativar camisa");
        }
    }
}
