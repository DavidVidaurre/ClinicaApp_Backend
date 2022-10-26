const { Schema, model } = require('mongoose');
const HistClinicaSchema = new Schema({
	fecha:{
		type: Date,
		required: false,
	},
	anamnesis:{
		type:String,
		required: false
	},
	diagnostico:{
		type: String,
		required: false,
	},
	tratamiento:{
		type: String,
		required: false,
	},
	examenesAuxiliares:{
		type: String,
		required: false,
	},
	//ex. fisico
	peso:{
		type: Number,
		required: false,
	},
    talla:{
        type: Number,
		required: false,
    },
	imc:{
		type: Number,
		required: false,
	},
	pc:{
		type: Number,
		required: false,
	},
	fr:{
		type: Number,
		required: false,
	},
	fc:{
		type: Number,
		required: false,
	},
	saturacion:{
		type: Number,
		required: false,
	},
	temperatura: {
		type: Number,
		required: false,
	},
	apreciacionG:{
		type: String,
		required: false,
	},
	tcsc:{
		type: String,
		required: false,
	},
	ojos:{
		type: String,
		required: false,
	},
	orofaringe:{
		type: String,
		required: false,
	},
	oidos:{
		type: String,
		required: false,
	},
	aparatoResp:{
		type: String,
		required: false,
	},
	aparatoCV:{
		type: String,
		required: false,
	},
	abdomen:{
		type: String,
		required: false,
	},
	aparatoGU:{
		type: String,
		required: false,
	},
	locomotor: {
		type: String,
		required: false,
	},
	neurologico:{
		type: String,
		required: false,
	},
	//----------------------
	id_Historia:{
		type: Schema.Types.ObjectId,
		ref: 'Historia',
		required: true
	},
	//------------------
	// id_Cita:{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Cita',
	// 	required: true
	// }
});
module.exports = model('HistClinica', HistClinicaSchema);