const { Schema, model } = require('mongoose');
const HistClinicaSchema = new Schema({
	enfermedadActual: {
		type: String,
		required: true,
	},
	//EXAMEN FISICO
	diagnostico:{
		type: String,
		required: true,
	},
	tratamiento:{
		type: String,
		required: true,
	},
	id_Historia:{
		type: Schema.Types.ObjectId,
		ref: 'Historia',
		required: true
	}
});
module.exports = model('HistClinica', HistClinicaSchema);