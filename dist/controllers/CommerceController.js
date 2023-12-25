import { BaseController } from "./base/baseController.js";
export class CommerceController extends BaseController {
    constructor(useCases) {
        super();
        this.useCases = useCases;
    }
    async sellTshirts(params, body) {
        try {
            const { sells } = body;
            const resolve = await this.useCases.sellTshirts.execute(sells);
            if (resolve.isRight()) {
                return this.ok(resolve.value.getValue());
            }
            else {
                return this.badRequest(resolve.value.error);
            }
        }
        catch (error) {
            return this.InternalServerError(error);
        }
    }
}
