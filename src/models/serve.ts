import express, {Application} from 'express'
import cors from "cors";
import fileUpload from "express-fileupload";
import { dbConnection } from '../db/mongodb/connection-mongo';
import logsImagesRoute from '../routes/routes-logs-images';
import imagesRoute from '../routes/router-images';


class Serve {
    private app: Application;
    private port: string;
    private apiPaths = {
        logsImages: '/api/logsimages',
        images: '/api/images'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT ?? "8000"

        this.conectiondb();
        this.middlewares();
        this.routers();
    }

    routers(){
        this.app.use(this.apiPaths.logsImages,  logsImagesRoute);
        this.app.use(this.apiPaths.images, imagesRoute)
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

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }
}

export default Serve;