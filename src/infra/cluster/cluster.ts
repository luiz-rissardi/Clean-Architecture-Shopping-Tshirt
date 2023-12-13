import cluster from "cluster";
import { cpus } from "os";


async function main() {
    if(cluster.isPrimary){
        for(let i=0;i<cpus().length;i++){
            cluster.fork();
        }
    }else{
        await import("../http/http.js")
    }
}

main()