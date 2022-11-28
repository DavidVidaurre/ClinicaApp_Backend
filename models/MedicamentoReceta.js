import pkg from 'mongoose';
const { Schema, model } = pkg;
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

export default model('MedicamentoReceta', MedicamentoRecetaSchema);