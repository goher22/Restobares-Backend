import { UploadedFile } from "express-fileupload";
import path from "path";

export const uploadFile = (file: UploadedFile, extencion: string, folder: string = '') => {


    return new Promise(async (resolve, reject)=>{

        const nombreTemp = 'temp.'+extencion
        const uploadPath = path.join(__dirname,'../public/uploads/', nombreTemp);

        await file.mv(uploadPath, (err) => {
            if (err)
                reject(err)
            resolve(nombreTemp)
        });

    })

        // const rutaImagenJPEG = 'ruta/a/tu/imagen.jpeg';

        // Utiliza la biblioteca sharp para cargar la imagen y convertirla a PNG



        // const destinationPath = path.join(__dirname,'../uploads/', folder,`${uuidv4()}.${extencion}`);
        // sharp(file)
        //     .toFile(destinationPath, (err, info) => {
        //         if(err){
        //             return reject('Error al guardar la imagen.');
        //         }

        //         return resolve('Imagen guardada con éxito.');
        //     });
};