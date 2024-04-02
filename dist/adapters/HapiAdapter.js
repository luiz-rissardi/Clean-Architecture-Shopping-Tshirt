export class HapiAdapter {
    static adapt(func) {
        return async function (request, h) {
            const body = request.payload != undefined ? JSON.parse(request.payload) : {};
            const data = await func(request.params, body);
            return data;
        };
    }
}
