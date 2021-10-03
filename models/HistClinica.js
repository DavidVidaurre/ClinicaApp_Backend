const { Schema, model } = require('mongoose');
const HistClinicaSchema = new Schema({
    fecha: {
		type: Date,
		required: false,
	},
    hora: {
		type: String,
		required: false,
	},
    enfermedadActual: {
		type: String,
		required: true,
	},
	diagnostico:{
		type: String,
		required: true,
	},
	tratamiento:{
		type: String,
		required: true,
	},
	id_Paciente:{
		type: Schema.Types.ObjectId,
		ref: 'Paciente',
		required: true
	}
});
module.exports = model('HistClinica', HistClinicaSchema);