import pkg from 'mongoose';
const { Schema, model } = pkg;
const FotoSchema = new Schema({
    nombre: {
		type: String,
		required: false,
        unique: true
	},
    id_Historia: {
        type: Schema.Types.ObjectId,
		ref:'Historia',
		// required: true
	},
})
export default model('Foto', FotoSchema);