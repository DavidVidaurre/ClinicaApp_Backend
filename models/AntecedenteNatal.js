const { Schema, model } = require('mongoose');
const AntecedenteNatalSchema = new Schema({
    peso_al_nacer:{
		type: Number,
		required: false,
	},
	tipoDeParto: {
		type: Number,
		required: false,
	},
    lugarDeParto: {
		type: String,
		required: false,
	},
    apgar1: {
		type: Number,
		required: false,
	},
	apgar5: {
		type: Number,
		required: false,
	},
    edadGestacional:{
        type: Number,
        required: false
    },
	complicaciones:{
        type: String,
        required: false
    },
	id_Historia:{
		type: Schema.Types.ObjectId,
		ref:'Historia',
		required: true
	}
});

module.exports = model('AntecedenteNatal', AntecedenteNatalSchema);