const { Schema, model } = require('mongoose');
const ExamenFisicoSchema = new Schema({
	peso:{
		type: Number,
		required: false,
	},
    talla:{
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
	orofaringe:{
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
	neurologico:{
		type: String,
		required: false,
	},
	// diagnostico:{
	// 	type: String,
	// 	required: false,
	// },
	// tratamiento:{
	// 	type: String,
	// 	required: false,
	// },

    // frecuenciaCardiaca: {
	// 	type: Number,
	// 	required: false,
	// },
    // presionArterial: {
	// 	type: Number,
	// 	required: false,
	// },
	
	id_HistClinica:{
		type: Schema.Types.ObjectId,
		ref:'HistClinica',
		required: true
	},
	id_Historia: {
		type: Schema.Types.ObjectId,
		ref: 'Historia',
		required: true,
	},

});

module.exports = model('ExamenFisico', ExamenFisicoSchema);