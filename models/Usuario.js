const { Schema, model } = require('mongoose');
const UsuarioSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	dni: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	rol:{
		type: String,
		required: true,
	}
});
module.exports = model('Usuario', UsuarioSchema);