import fs from "fs";
import path from "path";

export const deleteFile = (nameFile: string) => {
    return new Promise((resolve, reject) => {
        try{
            const rutaImagen = path.join(__dirname,'../public/uploads/', nameFile);

            fs.unlink(rutaImagen, (err) => {
                if (err) {
                    return reject('Error al eliminar el archivo JPEG:')
                } else {
                    return resolve('Imagen convertida a PNG exitosamente y archivo eliminado.');
                }
            });

        }catch(e){
            return reject("Error");
        }
    });
}