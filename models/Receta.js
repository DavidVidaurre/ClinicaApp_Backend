const { Schema, model } = require('mongoose');
const RecetaSchema = new Schema({
    fecha:{
        type: Date,
        required: false
    },
    fechaProx:{
		type: Date,
		required: false,
	},
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:false,
    }
})

module.exports = model('Receta', RecetaSchema)