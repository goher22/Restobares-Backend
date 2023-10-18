import { v4 } from "uuid";
import sharp, {FormatEnum} from "sharp";
import path from "path";

export const imageConvert = (nameFile:string, toFormat:keyof FormatEnum) => {

    return new Promise((resolve, reject)=> {
        try {
            const rutaImagen = path.join(__dirname,'../public/uploads/', nameFile);

            const newNameFile = v4();

            const rutaImagenPNG = path.join(__dirname,'../public/uploads/', newNameFile+'.png');
    
            // Utiliza la biblioteca sharp para cargar la imagen y convertirla a PNG
            sharp(rutaImagen)
                .toFormat('png')
                .toFile(rutaImagenPNG, (err, info) => {
                if (err) {
                    return reject('Error al convertir la imagen.');
                } else {
                    return resolve(newNameFile);
                }
            });
        } catch (error) {
            return reject("Error");
        }
    });
}