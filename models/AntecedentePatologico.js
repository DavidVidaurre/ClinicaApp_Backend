const { Schema, model } = require('mongoose');
const AntecedentePatologicoSchema = new Schema({
    nombre: {
		type: String,
		required: true,
	},
    descripcion: {
		type: String,
		required: true,
	},
	id_HistClinica:{
		type: Schema.Types.ObjectId,
		ref:'HistClinica',
		required: true
	}
});

module.exports = model('AntecedentePatologico', AntecedentePatologicoSchema);