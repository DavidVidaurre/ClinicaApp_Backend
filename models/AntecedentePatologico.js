const { Schema, model } = require('mongoose');
const AntecedentePatologicoSchema = new Schema({
    asmaBronquial: {
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

module.exports = model('AntecedentePatologico', AntecedentePatologicoSchema);