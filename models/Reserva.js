const { Schema, model } = require('mongoose');
const ReservaSchema = new Schema({
    nombre_paciente:{
		type: Text,
		required: false,
	},
    /*hora:{
        type: Date,
        required: false,
    }*/
});
module.exports = model('Reserva', ReservaSchema);