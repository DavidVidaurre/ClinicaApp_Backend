const { Schema, model } = require('mongoose');
const RecetaSchema = new Schema({
	cantidad: {
		type: String,
		required: false,
	},
	nombreMedicina: {
		type: String,
		required: false,
	},
	indicaciones:{
		type: String,
		required: false,
	},
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:false,
    }
});

module.exports = model('Receta', RecetaSchema);