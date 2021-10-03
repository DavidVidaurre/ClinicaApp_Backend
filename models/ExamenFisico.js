const { Schema, model } = require('mongoose');
const ExamenFisicoSchema = new Schema({
    frecuenciaCardiaca: {
		type: Number,
		required: false,
	},
    temperatura: {
		type: Number,
		required: false,
	},
    presionArterial: {
		type: Number,
		required: false,
	},
	peso:{
		type: Number,
		required: false,
	},
    talla:{
        type: Number,
        required: false,
    },
	id_HistClinica:{
		type: Schema.Types.ObjectId,
		ref:'HistClinica',
		required: true
	}

});

module.exports = model('ExamenFisico', ExamenFisicoSchema);