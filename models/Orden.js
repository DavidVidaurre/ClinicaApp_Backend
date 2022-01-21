const {Schema, model} = require('mongoose')

const OrdenSchema = new Schema({
    fecha: {
        type: Date,
        required: false
    },
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:false,
    }
})

module.exports = model('Orden', OrdenSchema)