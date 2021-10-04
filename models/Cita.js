const { Schema, model } = require('mongoose');
const CitaSchema = new Schema({
    nombre_paciente: {
		type: String,
		required: false,
	},
	fecha_nac:{
		type: Date,
		required: false,
	},
	telefono:{
		type: String,
		required: false,
	},
	//1. Masculino
	//2. Femenino
	sexo:{
		type: Number,
		required: false,
	},
	edad:{
		type: String,
		required: false,
	},
	DNI:{
		type: Number,
		required: false,
	},
	responsable:{
		type: String,
		required: false,
	},
	condicion:{
		type: Number,
		required: false,
	},
	motivo:{
		type: Number,
		required: false,
	},
	fecha: {
		type: Date,
		required: false,
	},
    id_Historia:{
        type: Schema.Types.ObjectId,
        ref:'Historia',
        required: false,
    }
});

module.exports = model('Cita', CitaSchema);