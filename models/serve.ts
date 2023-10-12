import express, {Application} from 'express'
import cors from "cors";
import { dbConnection } from '../db/mongodb/connection-mongo';

class Serve {
    private app: Application;
    private port: string;
    private apiPaths = {
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT ?? "8000"

        this.conectiondb();
        this.middlewares();
        this.routers();
    }

    routers(){
        // this.app.use(this.apiPaths.router, routerExport)
    }

    async conectiondb() {
        try {
            const resp = await dbConnection();
            console.log(resp);
        }catch(error){
            console.error(error);
        }
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }
}

export default Serve;