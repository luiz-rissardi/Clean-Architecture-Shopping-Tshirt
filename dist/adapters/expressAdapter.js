export class ExpressAdapter {
    static adapt(func) {
        return async (request, response) => {
            try {
                const data = await func(request.params, request.body);
                response.write(JSON.stringify(data));
            }
            catch (error) {
                response.writeHead(500);
            }
            finally {
                response.end();
            }
        };
    }
}
