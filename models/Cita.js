import pkg from 'mongoose';
const { Schema, model } = pkg;
const CitaSchema = new Schema({
    nombre_paciente: {
		type: String,
		required: false,
	},
	/*fecha_nac:{
		type: Date,
		required: false,
	},*/
	telefono:{
		type: String,
		required: false,
	},
	//1. Masculino
	//2. Femenino
	/*sexo:{
		type: Number,
		required: false,
	},
	edad:{
		type: String,
		required: false,
	},*/
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
	id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required: false,
    },
    id_Historia:{
        type: Schema.Types.ObjectId,
        ref:'Historia',
        required: true,
    }
});

export default model('Cita', CitaSchema);