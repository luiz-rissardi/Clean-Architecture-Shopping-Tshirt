export class GetTshirt {
    constructor(tshirtRepository) {
        this.tshirtRepository = tshirtRepository;
    }
    async execute(tshirtId) {
        const tshirt = await this.tshirtRepository.findById(tshirtId);
        return tshirt.active ? tshirt : undefined;
    }
}
