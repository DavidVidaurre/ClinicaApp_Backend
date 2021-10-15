const { Schema, model } = require('mongoose');
const HistClinicaSchema = new Schema({
	fecha:{
		type: Date,
		required: false,
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
	id_Historia:{
		type: Schema.Types.ObjectId,
		ref: 'Historia',
		required: true
	}
});
module.exports = model('HistClinica', HistClinicaSchema);