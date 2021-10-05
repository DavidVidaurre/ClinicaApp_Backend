const { Schema, model } = require('mongoose');
const AntecedentesSchema = new Schema({
    //FAMILIARES
    asmaBronquialFam: {
		type: Boolean,
		required: false,
	},
    diabetes: {
		type: Boolean,
		required: false,
	},
	epilepsia:{
		type:Boolean,
		required: false
	},
	Otros:{
		type: String,
		required: false
	},

    //NATALES
    peso_al_nacer:{
		type: Number,
		required: false,
	},
	tipoDeParto: {
		type: Number,
		required: false,
	},
    // lugarDeParto: {
	// 	type: String,
	// 	required: false,
	// },
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

    //PATOLÓGICOS
    asmaBronquialPat: {
		type: Boolean,
		required: false,
	},
    nebulizacion: {
		type: Boolean,
		required: false,
	},
	intervencionQuirurgica:{
		type:Boolean,
		required: false
	},
	reaccionAdversaMed:{
		type: String,
		required: false
	},
	enfAnteriores:{
		type: String,
		required: false
	},

    id_Historia:{
		type: Schema.Types.ObjectId,
		ref:'Historia',
		required: true
	}
});

module.exports = model('Antecedentes', AntecedentesSchema);