export class GetTshirt {
    constructor(tshirtRepository) {
        this.tshirtRepository = tshirtRepository;
    }
    async execute(tshirtId) {
        try {
            const tshirt = await this.tshirtRepository.findById(tshirtId);
            return tshirt;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
