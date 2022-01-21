const { Schema, model } = require('mongoose');
const ReservaSchema = new Schema({
    nombre_paciente:{
		type: String,
		required: false,
	},
    fecha:{
		type: Date,
		required: false,
	}
});
module.exports = model('Reserva', ReservaSchema);