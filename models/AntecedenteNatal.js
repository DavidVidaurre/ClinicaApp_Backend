const { Schema, model } = require('mongoose');
const AntecedenteNatalSchema = new Schema({
    peso_al_nacer:{
		type: Number,
		required: false,
	},
    talla_al_nacer:{
        type: Number,
        required: false,
    },
	tipoDeParto: {
		type: String,
		required: false,
	},
    lugarDeParto: {
		type: String,
		required: false,
	},
    apgar: {
		type: Number,
		required: false,
	},
    perimetroCefalico:{
        type: Number,
        required: false
    },
	id_Paciente:{
		type: Schema.Types.ObjectId,
		ref:'Paciente',
		required: true
	}
});

module.exports = model('AntecedenteNatal', AntecedenteNatalSchema);