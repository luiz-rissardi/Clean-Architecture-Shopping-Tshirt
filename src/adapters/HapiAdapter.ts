

export class HapiAdapter{
    static adapt(func: Function){
        return async function(request:any,h:any){
            const body = request.payload != undefined ? JSON.parse(request.payload) : {}
            const data = await func(request.params,body);
            return data;   
        }
    }
}