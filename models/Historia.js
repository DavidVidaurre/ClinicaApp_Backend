const { Schema, model, SchemaTypes } = require('mongoose');
const HistoriaSchema = new Schema({
    dni_paciente: {
		type: String,
		required: false,
        unique: true
	},
    nombres_paciente: {
		type: String,
		required: false,
	},
    fecha_nac:{
        type: Date,
        required: false,
    },
	/*edad:{
		type : String,
		required : false,
	},*/
    lugar_nac:{
        type: String,
        required: false,
    },
	direccion:{
		type: String,
		required: false
	},
	nombre_madre: {
		type: String,
		required: false,
	},
	ocupacion_madre: {
		type: String,
		required: false,
	},
	telefono_madre: {
		type: Number,
		required: false
	},
	nombre_padre: {
		type: String,
		required: false,
	},
	ocupacion_padre: {
		type: String,
		required: false,
	},
	telefono_padre: {
		type: Number,
		required: false 
	},
	numero_hijo:{
		type: Number,
		required: false
	},
	referencia:{
		type: String,
		required: false
	},
	//1. Masculino
	//2. Femenino
	sexo:{
		type: Number,
		required: false,
	},
	//DNI PARA EL APODERADO
	// dni:{
	// 	type: String,
	// 	required: false
	// },
	id_Usuario:{
		type: Schema.Types.ObjectId,
		ref:'Usuario',
		// required: true
	}
});
module.exports = model('Historia', HistoriaSchema);