const { Schema, model, SchemaTypes } = require('mongoose');
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
module.exports = model('Foto', FotoSchema);