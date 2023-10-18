import {Schema, model} from 'mongoose'
import ILogsImages from "../../../interfaces/iLogsImages";

const logsImagesSchema = new Schema<ILogsImages>({
    date: {
        type: Number,
        required: [true, 'La fecha es obligatorio'],
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

logsImagesSchema.methods.getDateAsDate = function () {
    return new Date(this.date);
};

module.exports = model<ILogsImages>('LogImage', logsImagesSchema)