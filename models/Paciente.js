const { Schema, model } = require('mongoose');
const PacienteSchema = new Schema({
    dni_paciente: {
		type: String,
		required: true,
        unique: true
	},
    nombres_paciente: {
		type: String,
		required: true,
	},
    aPaterno: {
		type: String,
		required: true,
	},
	aMaterno: {
		type: String,
		required: true,
	},
    fecha_nac:{
        type: Date,
        required: false,
    },
    lugar_nac:{
        type: String,
        required: true,
    },
	estado:{
		type: Boolean,
		required: false,
	}
});
module.exports = model('Paciente', PacienteSchema);