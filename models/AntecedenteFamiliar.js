const { Schema, model } = require('mongoose');
const AntecedenteFamiliarSchema = new Schema({
    asmaBronquial: {
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
	id_Historia:{
		type: Schema.Types.ObjectId,
		ref:'Historia',
		required: true
	}
});

module.exports = model('AntecedenteFamiliar', AntecedenteFamiliarSchema);