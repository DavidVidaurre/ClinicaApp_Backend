import pkg from 'mongoose';
const { Schema, model } = pkg;

const IndicacionOrdenSchema = new Schema({
    indicaciones: {
        type: String,
        required: false
    },
    id_Orden: {
        type: Schema.Types.ObjectId,
        ref: 'Orden',
        required: false
    }
})

export default model('IndicacionOrden', IndicacionOrdenSchema)