import {Schema, model} from 'mongoose'
import ILogsImages from "../../../interfaces/iLogsImages";

const logsImagesSchema = new Schema<ILogsImages>({
    date: {
        type: Date,
        required: [true, 'La fecha es obligatorio']
    },
    nameUser: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    urlImage: {
        type: String,
        required: [true, 'Lua url de la imagen es obligatorio'],
    }
});

module.exports = model('LogImage', logsImagesSchema)