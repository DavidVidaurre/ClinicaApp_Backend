const { Schema, model } = require('mongoose');
const RecetaSchema = new Schema({
	nombreMedicina: {
		type: String,
		required: true,
	},
	dosis:{
		type: String,
		required: true,
	},
	horario: {
		type: String,
		required: true,
		unique: true,
	},
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:true,
    }
});

module.exports = model('Receta', RecetaSchema);