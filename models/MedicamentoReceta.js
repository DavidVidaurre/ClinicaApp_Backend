const { Schema, model } = require('mongoose');
const MedicamentoRecetaSchema = new Schema({
	cantidad: {
		type: String,
		required: false,
	},
	nombreMedicina: {
		type: String,
		required: false,
	},
	indicaciones:{
		type: String,
		required: false,
	},
    id_Receta:{
        type: Schema.Types.ObjectId,
        ref:'Receta',
        required:false,
    }
});

module.exports = model('MedicamentoReceta', MedicamentoRecetaSchema);