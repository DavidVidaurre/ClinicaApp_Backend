const { Schema, model} = require('mongoose')

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

module.exports = model('IndicacionOrden', IndicacionOrdenSchema)