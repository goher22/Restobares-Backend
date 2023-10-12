 import express, {Application} from 'express'
 import cors from "cors";

class Serve {
    private app: Application;
    private port: string;
    private apiPaths = {
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT ?? "8000"

        this.middlewares();
        this.routers();
    }

    routers(){
        // this.app.use(this.apiPaths.router, routerExport)
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